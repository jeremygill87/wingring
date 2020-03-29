import React, { Component } from "react";
export default class Banner extends Component {
    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <Container>
                        <h1>WING RING</h1>
                    </Container>
                </Jumbotron>
            </React.Fragment>
        )
    }
}