import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./banner.css";

export default class Banner extends Component {
    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid id="jumbotron-container">
                    <Container id="logo-container">
                        <Image id="wing-ring-logo" src="https://fontmeme.com/permalink/200329/27a4656c5b1a3a93fe6ff82561ec758b.png"/>
                    </Container>                       
                </Jumbotron>
                <ul id="links-bar" className="nav">
                            <li><a className="banner-links" href="/about">About Us</a></li>
                            <li><a className="banner-links" href="/raters">Meet the Raters</a></li>
                            <li><a className="banner-links" href="/wings">Get to the Wings</a></li>
                        </ul>
            </React.Fragment>
        )
    }
}