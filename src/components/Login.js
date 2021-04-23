import React, { PureComponent } from "react";
import {connect} from "react-redux";
import * as actionAuth from "../redux/auth/actions"

class Login extends PureComponent {

    submitForm = (evt) => {
        evt.preventDefault();
        //this.props.login();

        const userName = evt.target.elements[0].defaultValue;
        this.props.userAuth(userName);
    };

    render() {
        //console.log(this.props);
        return (
            <div className="form-wrapper">
            {
                !this.props.auth.isAuth
                    ?
                    <>
                    <form onSubmit={this.submitForm} className="form-login" action="/" name="auth-form" method="POST">
                        <input className="form__input" type="text" name="login" defaultValue={"Bob"}/>
                        <input type="checkbox" name="rememberUser" id="checkbox"/>
                        <input className="form__submit" type="submit" name="auth-submit" value="Войти"/>
                    </form>
                    < button onClick={this.props.checkConnection}>Check connection</button>
                    </>
                    :
                    <>
                        <div className="profile-info">
                            <p>
                                Пользователь {this.props.auth.userName}
                            </p>
                        </div>
                        <div className="profile-buttons">
                            <button onClick={this.props.logout}>Выйти</button>
                            <button onClick={this.props.checkConnection}>Check connection</button>
                        </div>


                    </>

            }
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            dispatch({ type: "login"});
        },
        logout: () => {
            dispatch({ type: "logout"});
        },
        userAuth: (name) => {
            dispatch(actionAuth.getToken(name))
        },
        checkConnection: () => {
            dispatch(actionAuth.checkConnection())
        }
    }
};


export default connect(null, mapDispatchToProps)(Login);

