import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class Welcome extends Component {
    render() {
        return(
            <div className="welcome-container">
                <div className="three columns" id="welcome-message">
                    <h1 id="welcome-tagline">One Wing To Rule Them All</h1>
                    <div className="mb-2" id="welcome-button">
                        <Button variant="primary" size="lg">
                            Enter
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}