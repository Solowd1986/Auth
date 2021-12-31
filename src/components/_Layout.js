import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Login from "./Login";
import FormLogin from "./Pages/Login/FormLogin";

import styles from "../scss/auth-form/auth-form.module.scss";


const Lay = () => {
    return (
        <div className={styles.over}>
            <div className={styles.wrap}>
                <div className={styles.item}>item1</div>
                <div className={styles.item}>item2</div>
                <div className={styles.item}>item3</div>
                <div className={styles.item}>item4</div>
                <div className={styles.item}>item5</div>
                <div className={styles.item}>item6</div>
                <div className={styles.item}>item7</div>
            </div>
        </div>

    )
};


// header - это блок с навигацией, в нем лежат NavLink с названиями страниц, типа index/profile
// Login - это форма регистрации или вывод профиля, если вход был выполнен
// children - тут выводится содержимое страниц, так как _Layout окружает собой набор Route путей
class _Layout extends React.Component {
    render() {
        return (
            <Container>
                <Header/>
                <Lay/>
                {/*<FormLogin/>*/}

                <button className={"btn bg-danger"}>Clear</button>
                <div className="alert bt alert-primary" role="alert">
                    This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                </div>
                <Login/>
                { this.props.children }
            </Container>
        )

    }
}

export default _Layout;

