
import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";


/**
 * 1. Принимаем на вход props, тут же их деструктурируем. В варианте ниже извлекается isAuth, он из Redux,
 *    также извлекается component, его передаем при вызове PrivateRoute, также передаются все стандартные
 *    параметры для Route, такие как path/exact/etc, все они уходят в обьект props как rest-параметры
 * 2. Далее эти props передаются в Route, если аутентификация пройдена. То есть Route просто получит обычные
 *    path/exact/etc, если же нет - то редирект.
 * 3. Есть возможноть написать для Route render-функцию, тогда props для нее получат три аргумента
 *    Route - /match/location/history. Любые сторонние аргументы можно передать в path, через доп. параметры,
 *    они уйдут в match -> params
 *    <Route {...props} render = {props => {
				console.log('this props', props); - тут history, match и location
				return (
					<Component {...props}/>
				)
			}
 *
 */

const PublicRoute = ({ isAuth, component: Component, ...props}) => {
    return isAuth ? <Route {...props}/> : <Redirect to="/404"/>;
};

const mapStateToProps = (state) => ( {isAuth: state.auth.isAuth });
export default connect(mapStateToProps)(PublicRoute);






