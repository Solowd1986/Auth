import * as types from "./constants/auth";


export const getToken = (data = null) => async (dispatch, getState, api) => {

    try {
        // console.log(process.env.NODE_ENV);
        const response = await api.getToken("token", data);

        //console.log('resp: ', response.data);

        const login = response.data.formdata.login;

        if (response.status === 200) {
            dispatch({type: "login", payload: { name: login }});
        }

        if (!localStorage.getItem("token")) {
            localStorage.setItem("token", JSON.stringify({ response: response.data, userName: login}));
        }
        //console.log("final response in action auth", response);
    } catch (e) {
        console.log("catch that", e);
    }

    // return {
    //     type: types.AUTH_REQUIRE_AUTHORIZATION,
    //     payload: {
    //         data
    //     }
    // }
};




export const userRegistration = (data) => async (dispatch, getState, api) =>{
    try {
        const response = await api.userAuth("reg", data);
        dispatch({
            type: types.USER_REGISTRATION_SUCCESS,
            payload: response.data.reg_data
        });
    } catch (e) {
        console.log("catch that", e);
    }
};

export const userAuth = (data) => async (dispatch, getState, api) => {
    try {
        const response = await api.userAuth("auth", data);
        dispatch({
            type: types.USER_AUTH_SUCCESS,
            payload: response.data.auth_data
        });
        //console.log(response);
    } catch (e) {
        console.log("catch that", e);
    }
};


export const logout = () => {
    localStorage.removeItem("token");
    return {
        type: types.USER_LOGOUT,
    }
};

export const checkConnection = (data = null) => async (dispatch, getState, api) => {
    const response = await api.get("check");
    //console.log(response);
};
