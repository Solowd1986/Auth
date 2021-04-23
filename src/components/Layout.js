import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Login from "./Login";

class Layout extends React.Component {
    render() {
        return (
            <Container>
                <Header/>
                <Login auth={this.props.auth}/>
                { this.props.children}
            </Container>
        )

    }
}

function mapStateToProps(state) {
    return {
        auth: state
    }
}

export default connect(mapStateToProps)(Layout);

