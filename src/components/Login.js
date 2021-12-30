import React, { createRef, PureComponent } from "react";
import { connect } from "react-redux";
import * as actionAuth from "../redux/auth/actions"
import { Redirect } from "react-router";
import styles from "../scss/auth-form/auth-form.module.scss"

import * as authActions from "../redux/auth/actions"


/**
 * Данный блок получает данные о пользователе из Redux, также он получает методы для рабоыт с Redux store
 * Если флаг props.isAuth = false, то выводим форму входа, иначе - профиль пользователя
 *
 */

class Login extends PureComponent {

    constructor(props) {
        super(props);
        this.reg = createRef();
        this.auth = createRef();
    }


    submitForm = (evt) => {
        evt.preventDefault();
        // Тут для удобства (чтоб не вводить каждый раз) мы берем указанные default-поля из формы и отправляем
        // для регистрации в Redux, в получнный от Redux через props метод userAuth. То есть вся работа с данными
        // делегируется в Redux, тут просто они вводятся, неважно, регистрация или вход пользователя

        const fromArray = Array.from(evt.target.elements);
        const login = fromArray.filter(item => /.*login.*/.test(item.name))[0]?.defaultValue;
        const psw = fromArray.filter(item => /.*psw.*/.test(item.name))[0]?.defaultValue;
        const name = fromArray.filter(item => /.*name.*/.test(item.name))[0]?.defaultValue;

        const formData = {
            formType: evt.target.name,
            name,
            login,
            psw
        };

        const form = new FormData();
        for (const [k, v] of Object.entries(formData)) {
            form.append(k, v);

        }
        evt.target.name !== "auth-form"? this.props.userRegistration(form) : this.props.userAuth(form);
    };

    render() {
        //console.log(this.props);


        const handlerClick = (evt) => {
            evt.preventDefault();
            evt.stopPropagation();

            const type = evt.target.dataset.type;
            Array.from(evt.currentTarget.children).forEach(item => item.classList.remove(styles.active));
            evt.target.classList.add(styles.active);
            if (type === "auth") {
                this.reg.current.classList.add(styles.hide);
                this.auth.current.classList.remove(styles.hide);
            } else {
                this.auth.current.classList.add(styles.hide);
                this.reg.current.classList.remove(styles.hide);
            }
            //console.log(this.reg);
        };



        return (
            <div className="form-wrapper">
                <div onClick={handlerClick} className={`${styles.choose} ${this.props.isAuth ? styles.hide : "" }`}>
                    <span data-type="reg">Регистрация</span>
                    <span data-type="auth" className={styles.active}>Войти</span>
                </div>

                {
                    !this.props.isAuth
                        ?
                        <>
                            <form
                                onSubmit={this.submitForm}
                                className={`${styles.hide} form-login`}
                                action="/"
                                name="reg-form"
                                method="POST"
                                ref={this.reg}
                            >
                                <div className="inp_wrapper">
                                    <label>Имя
                                        <input
                                            className="inp_text"
                                            type="text"
                                            autoComplete={"on"}
                                            name="reg_name"
                                            defaultValue={"Bob"}
                                        />
                                    </label>
                                    <label>Логин
                                        <input
                                            className="inp_text"
                                            type="text"
                                            autoComplete={"on"}
                                            name="reg_login"
                                            defaultValue={"Steam"}
                                        />
                                    </label>
                                    <label>Пароль
                                        <input
                                            className="inp_text"
                                            type="password"
                                            autoComplete={"on"}
                                            name="reg_psw"
                                            defaultValue={"1234"}
                                        />
                                    </label>
                                </div>
                                <input type="submit" name="auth-submit" value="Регистрация"/>
                            </form>

                            <form
                                onSubmit={this.submitForm}
                                className="form-login"
                                action="/"
                                name="auth-form"
                                method="POST"
                                ref={this.auth}
                            >
                                <div className="inp_wrapper">
                                    <input
                                        className="inp_text"
                                        type="text"
                                        autoComplete={"on"}
                                        name="auth_login"
                                        defaultValue={"Bob"}
                                    />
                                    <input
                                        className="inp_text"
                                        type="password"
                                        autoComplete={"on"}
                                        name="auth_psw"
                                        defaultValue={"1234"}
                                    />
                                    <input type="checkbox" name="rememberUser" id="checkbox"/>
                                </div>
                                <input type="submit" name="auth-submit" value="Войти"/>
                            </form>

                            < button onClick={this.props.checkConnection}>Check connection</button>
                        </>
                        :
                        <>
                            <div className="profile-info">
                                <p>
                                    Пользователь {this.props.userData?.name || "John Doe"}
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

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth, userData: state.auth.userData });

// const mapDispatchToProps = (dispatch) => {
//     return {
//         logout: () => {
//             dispatch({ type: "logout" });
//         },
//         userAuth: (params) => {
//             dispatch(actionAuth.getToken(params))
//         },
//         checkConnection: () => {
//             dispatch(actionAuth.checkConnection())
//         }
//     }
// };


export default connect(mapStateToProps, authActions)(Login);

