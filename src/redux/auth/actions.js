


export const getToken = (data = null) => async (dispatch, getState, api) => {

    try {
        // console.log(process.env.NODE_ENV);

        //console.log("before request from action auth", data);
        const response = await api.getToken("token");
        const currentToken = localStorage.getItem("token");

        if (response.status === 200) {
            dispatch({type: "login", payload: { name: data }});
        }

        if (!currentToken) {
            localStorage.setItem("token", JSON.stringify({ response: response.data, userName: data}));
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

export const checkConnection = (data = null) => async (dispatch, getState, api) => {
    const response = await api.get("check");
    console.log(response);
};
