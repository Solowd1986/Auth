import React from "react";
import { NavLink } from "react-router-dom";
import {Container, Row, Col, Button} from "react-bootstrap";
import Header from "./Header";
import Login from "./Login";
import { connect } from "react-redux";

const Index = (props) => {
    //console.log(props);
    return (
        <>
            <Row>
                <Col>
                    <h1 style={{textAlign: "center"}}>INDEX</h1>
                </Col>
            </Row>
        </>
    );
};

export default Index;






