import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Login from "./Login";
import FormLogin from "./Pages/Login/FormLogin";


// header - это блок с навигацией, в нем лежат NavLink с названиями страниц, типа index/profile
// Login - это форма регистрации или вывод профиля, если вход был выполнен
// children - тут выводится содержимое страниц, так как _Layout окружает собой набор Route путей
class _Layout extends React.Component {
    render() {
        return (
            <Container>
                <Header/>
                <FormLogin/>

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

