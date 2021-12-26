import React from "react";
import { NavLink } from "react-router-dom";
import {Container, Row, Col, Button} from "react-bootstrap";

const Header = (props) => {
    //console.log(props);
    return (
            <Row>
                <Col>
                    <header className={"d-flex justify-content-center mt-5 mb-1"}>
                        <NavLink to="/"
                                 className={"mr-2 p-2 rounded text-white bg-primary"}
                                 activeClassName={"bg-danger"}
                                 exact>
                            Главная страница
                        </NavLink>
                        <NavLink to="/movies"
                                 className={"mr-2 p-2 rounded text-white bg-primary"}
                                 activeClassName={"bg-danger"}
                                 exact>
                            Фильмы
                        </NavLink>
                        <NavLink to="/series"
                                 className={"mr-2 p-2 rounded text-white bg-primary"}
                                 activeClassName={"bg-danger"}
                                 exact>
                            Сериалы
                        </NavLink>
                        <NavLink to="/anime"
                                 className={"mr-2 p-2 rounded text-white bg-primary"}
                                 activeClassName={"bg-danger"}
                                 exact>
                            Аниме
                        </NavLink>
                        <NavLink to="/profile"
                                 className={"mr-2 p-2 rounded text-white bg-primary"}
                                 activeClassName={"bg-danger"}
                                 exact>
                            Профиль
                        </NavLink>
                        <NavLink to="/private"
                                 className={"mr-2 p-2 rounded text-white bg-primary"}
                                 activeClassName={"bg-danger"}
                                 exact>
                            Закрытая страница
                        </NavLink>
                    </header>
                </Col>
            </Row>

    );
};

export default Header;







