import React, { PureComponent } from "react";
import {connect} from "react-redux";

class Login extends PureComponent {

    submitForm = (evt) => {
        evt.preventDefault();
        this.props.login();
    };

    render() {
        //console.log(this.props);

        return (
            <div className="form-wrapper">
            {
                !this.props.auth.isAuth
                    ?
                    <form onSubmit={this.submitForm} className="form-login" action="/" name="auth-form" method="POST">
                        <input className="form__input" type="text" name="login" defaultValue={"Bob"}/>
                        <input type="checkbox" name="rememberUser" id="checkbox"/>
                        <input className="form__submit" type="submit" name="auth-submit" value="Войти"/>
                    </form>
                    :
                    <button onClick={this.props.logout}>Выйти</button>

            }

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.isAuth
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
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);

