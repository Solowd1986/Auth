import React, { Component } from "react";
import './App.css';
import "./scss/bootstrap/_config.scss";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Pages/Profile";
import Index from "./components/Pages/Index";
import _Layout from "./components/_Layout";

import PageNotFound from "./components/404/PageNotFound";
import Anime from "./components/Pages/Anime";
import Series from "./components/Pages/Serires";
import Movies from "./components/Pages/Movies";
import PrivatePage from "./components/Pages/PrivatePage";


import store from "./redux/store";



// const users = [
//     "admin",
//     "guest",
//     "anon",
// ];
//
//
// const [firstRole, ...rest] = users;
//
// console.log(firstRole);
// console.log(rest);



// const user = {
//     name: "stan",
//     age:23,
//     address: "none"
// };
//
// const { name, ...rest } = user;
// console.log(name);
// console.log(rest);


export default class App extends Component {
    render() {
        return (
            <React.StrictMode>
                <Provider store={store}>
                    <BrowserRouter>
                        <_Layout>
                            <Switch>
                                <Route path="/" component={Index} exact/>
                                <Route path="/anime" component={Anime} exact/>
                                <Route path="/series" component={Series} exact/>
                                <Route path="/movies" component={Movies} exact/>
                                <Route path="/profile" component={Profile} exact/>
                                {/*<Route path="/page" component={Page} exact/>*/}
                                <Route path="/404" component={PageNotFound} exact/>
                                <PrivateRoute path="/private" component={PrivatePage} status="admin" exact={true}/>
                                <Redirect to="/404"/>
                            </Switch>
                        </_Layout>
                    </BrowserRouter>
                </Provider>
            </React.StrictMode>
        );
    }
}



