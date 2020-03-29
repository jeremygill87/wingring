import React, { Component } from "react";
export default class Sidebar extends Component {
    render() {
        return(
            <React.Fragment>
                <Nav defautActiveKey="/" className="flex-column">
                    <Nav.Link href="/about">About the Wing Ring</Nav.Link>
                    <Nav.Link href="/raters">Meet the Raters!</Nav.Link>
                    <Nav.Link href="/wings">The Wings</Nav.Link>
                </Nav>
            </React.Fragment>
        )
    }
}
