import * as types from "./constants/auth";

const initialState = {
    isAuth: !!localStorage.getItem("token"),
    userData: null,

    //userName: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")).userName : null
};


export default function (state = initialState, action) {
    switch (action.type) {


        case types.USER_REGISTRATION_REQUEST: {
            return state
        }

        case types.USER_REGISTRATION_SUCCESS: {
            return {
                ...state,
                isAuth: true,
                userData: action.payload
            }
        }


        case types.USER_REGISTRATION_ERROR: {
            return state
        }


        case types.USER_AUTH_REQUEST: {
            return state
        }

        case types.USER_AUTH_SUCCESS: {
            return {
                ...state,
                isAuth: true,
                userData: action.payload
            }
        }

        case types.USER_AUTH_ERROR: {
            return state
        }


        case types.USER_LOGOUT: {

            return {
                ...state,
                isAuth: false,
                userData: null
            }
        }

        default:
            return state;

    }
}

