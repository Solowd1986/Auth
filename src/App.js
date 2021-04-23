import React, { Component } from "react";
import './App.css';


import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import Index from "./components/Index";
import Layout from "./components/Layout";

import PageNotFound from "./components/PageNotFound";
import Anime from "./components/Anime";
import Series from "./components/Serires";
import Movies from "./components/Movies";


import store from "./redux/store";

export default class App extends Component {
    render() {
        return (
            <React.StrictMode>
                <Provider store={store}>
                    <BrowserRouter>
                        <Layout>

                        <Switch>
                            <Route path="/" component={Index} exact/>
                            <Route path="/anime" component={Anime} exact/>
                            <Route path="/series" component={Series} exact/>
                            <Route path="/movies" component={Movies} exact/>
                            <Route path="/profile" component={Profile} exact/>
                            {/*<Route path="/page" component={Page} exact/>*/}
                            <Route path="/404" component={PageNotFound} exact/>
                            <PrivateRoute path="/page" component={Profile} exact={true}/>
                            <Redirect to="/404"/>
                        </Switch>
                        </Layout>
                    </BrowserRouter>
                </Provider>
            </React.StrictMode>
        );
    }
}



