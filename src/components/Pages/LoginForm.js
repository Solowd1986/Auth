import React from "react";
import styles from "./form-login.module.scss";

const FormLogin = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.html}>

                <input id="tab-1" type="radio" name="tab" className={styles["sign-in"]} checked/>
                <label htmlFor="tab-1" className={styles.tab}>Войти</label>

                <input id="tab-2" type="radio" name="tab" className={styles["sign-up"]}/>
                <label htmlFor="tab-2" className={styles.tab}>Регистрация</label>

                <div className={styles.form}>

                    <div className={styles["sign-in-htm"]}>
                        <div className={styles.group}>
                            <label htmlFor="user" className={styles.label}>Имя пользователя</label>
                            <input id="user" type="text" className={styles.input}/>
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="pass" className={styles.label}>Пароль</label>
                            <input id="pass" type="password" className={styles.input} data-type="password"/>
                        </div>

                        <div className={styles.group}>
                            <input id="check" type="checkbox" className={styles.check}/>
                            <label htmlFor="check" className={styles["icon-wrap"]}>
                                <span className={styles.icon}/>
                                Запомнить меня
                            </label>
                        </div>

                        <div className={styles.group}>
                            <input type="submit" className={styles.button} value="Войти"/>
                        </div>

                        <div className={styles.hr}/>
                        <div className={styles["foot-lnk"]}>
                            <a href="">Забыли пароль?</a>
                        </div>
                    </div>

                    <div className={styles["sign-up-htm"]}>
                        <div className={styles.group}>
                            <label htmlFor="user" className={styles.label}>Имя пользователя</label>
                            <input id="user" type="text" className={styles.input}/>
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="pass" className={styles.label}>Пароль</label>
                            <input id="pass" type="password" className={styles.input} data-type="password"/>
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="pass" className={styles.label}>Повторите пароль</label>
                            <input id="pass" type="password" className={styles.input} data-type="password"/>
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="pass" className={styles.label}>E-mail</label>
                            <input id="pass" type="text" className={styles.input}/>
                        </div>

                        <div className={styles.group}>
                            <input type="submit" className={styles.button} value="Зарегистрироваться"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default FormLogin;



