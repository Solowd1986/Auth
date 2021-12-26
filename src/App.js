import React, { Component } from "react";
import './App.css';
import "./scss/base.scss";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import Index from "./components/Index";
import _Layout from "./components/_Layout";

import PageNotFound from "./components/PageNotFound";
import Anime from "./components/Anime";
import Series from "./components/Serires";
import Movies from "./components/Movies";
import PrivatePage from "./components/PrivatePage";


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



