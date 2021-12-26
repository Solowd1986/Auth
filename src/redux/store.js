import { applyMiddleware, createStore, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import auth from "./auth/reducer";
import { compose } from "redux";


//import reduxLogger from "./middlware/reduxLogger";
import ApiService from "./api/ApiService/ApiService";

const activeMiddlewareList = [reduxThunk.withExtraArgument(ApiService)];


const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers =
    typeof window === "object" && process.env.NODE_ENV === "development" && devtools
        ? devtools({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;



function counter (state = { title: "counter" }, action) {
    return state;
}

const rootReducer = combineReducers({
    auth,
    counter
});


const preloadedState = {
    ...JSON.parse(decodeURIComponent(localStorage.getItem("auth")))
};


const enhancedStore = composeEnhancers(applyMiddleware(...activeMiddlewareList));
const store = Object.keys(preloadedState).length
    ? createStore(rootReducer, preloadedState, enhancedStore)
    : createStore(rootReducer, enhancedStore);



// store.subscribe(() => {
//     if (store.getState().cart.products.length) {
//         localStorage.setItem("cart", encodeURIComponent(JSON.stringify({ cart: store.getState().cart })));
//     }
//     if (localStorage.getItem("cart") && !store.getState().cart.products.length) {
//         localStorage.removeItem("cart");
//     }
//     if (store.getState().auth.rememberMe && store.getState().auth.token) {
//         localStorage.setItem("auth", encodeURIComponent(JSON.stringify({ auth: store.getState().auth })));
//     }
//     if (store.getState().auth.isTokenExpired) {
//         localStorage.removeItem("auth");
//     }
// });

export default store;


