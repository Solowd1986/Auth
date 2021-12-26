import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Login from "./Login";


// header - это блок с навигацией, в нем лежат NavLink с названиями страниц, типа index/profile
// Login - это форма регистрации или вывод профиля, если вход был выполнен
// children - тут выводится содержимое страниц, так как _Layout окружает собой набор Route путей

class _Layout extends React.Component {
    render() {
        return (
            <Container>
                <Header/>
                <Login/>
                { this.props.children }
            </Container>
        )

    }
}

export default _Layout;

