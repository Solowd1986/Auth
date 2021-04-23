



const initialState = {
    isAuth: !!localStorage.getItem("token"),
    userName: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")).userName : null
};


export default function (state = initialState, action) {
    switch (action.type) {
        case "login": {
            return {
                ...state,
                isAuth: true,
                userName: action.payload.name
            }
        }

        case "logout": {
            localStorage.removeItem("token");
            return {
                ...state,
                isAuth: false,
                userName: null
            }
        }


        default:
            return state;

    }
}

