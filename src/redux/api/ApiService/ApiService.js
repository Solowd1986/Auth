import axios from "axios";

class ApiService {
    constructor() {
        this._axios = axios;
        this._retryCount = 0;
        this._lastRequestURI = null;

        this.api = this._axios.create({
            baseURL: "/api/",
            timeout: 5000,
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("auth") && this._decodeRecord("auth").auth.token}`,
            },
        });

        this.api.interceptors.response.use(this._handleSuccessResponse, this._handleFailResponse);
        this.api.interceptors.request.use(this._handleRequest);
    }

    _handleRequest = (request) => {
        this._lastRequestURI = request.url;
        return request;
    };

    _handleFailResponse = async (error) => {
        if (error.code === "ECONNABORTED" && this._retryCount < 3) {
            ++this._retryCount;
            await this.api.get(this._lastRequestURI);
        }
        this._retryCount = 0;
        return Promise.reject(error);
    };

    _decodeRecord = recordName => JSON.parse(decodeURIComponent(localStorage.getItem(recordName)));

    _handleSuccessResponse = response => response;

    get = (uri) => this.api.get(uri);


    userAuth = async (uri, params) => {
        return await this.api.post(uri, params);
    };

    getToken = async (uri, params) => {
        return await this.api.post(uri, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    };
}

export default new ApiService();
