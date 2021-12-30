import React from "react";
import { NavLink } from "react-router-dom";
import {Container, Row, Col, Button} from "react-bootstrap";

const PageNotFound = (props) => {
    return (
        <>
            <Row>
                <Col>
                    <h1 style={{ textAlign: "center"}}>NOT FOUND</h1>
                    <div style={{ textAlign: "center"}} >
                        <NavLink to="/">На главную</NavLink>
                    </div>
                </Col>
            </Row>
        </>
    );
};


export default PageNotFound;




