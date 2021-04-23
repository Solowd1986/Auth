
const initialState = {
    isAuth: false,
    userName: null
};


export default function (state = initialState, action) {
    switch (action.type) {
        case "login": {
            return {
                ...state,
                isAuth: true
            }
        }

        case "logout": {
            return {
                ...state,
                isAuth: false
            }
        }


        default:
            return state;

    }
}

