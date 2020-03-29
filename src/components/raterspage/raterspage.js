import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./raterspage.css";

export default class Raters extends Component {
    render() {
        return (
            <Container fluid id="raters-container">
                <Row id="raters-headline">
                    <h2 id="raters-title">Our Raters</h2>
                </Row>

                <Row id="raters-row">
                    <Col xs={6} md={6}>
                        <Image id="rater-image" src="https://mail.google.com/mail/u/0?ui=2&ik=fc24c5d5fe&attid=0.1&permmsgid=msg-a:r5282890454740619753&th=171276a400ae158b&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_K_lSeSxiS8ey0NmjvtdxpjJB5DfnsO1yUko8qwYvo7s8nnVQI70T1zP_ITUqI0xHK6hJCR9-dmMqTlBWwU1oeXjRQOqC_Ds-vq7YmxakNZfdRC2zZEHb45yY&disp=emb&realattid=171276a34fcb68814e91" roundedCircle />
                    </Col>
                    <Row id="raters-data">
                        <Col xs={12} md={12}>
                            <Row id="raters-name">Sarina</Row>
                            <Row id="raters-highlights">
                                <ul>
                                    <li>Hey, it's me</li>
                                    <li>I think I'm soooooo cool</li>
                                    <li>Jeremy is cooler</li>
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                </Row>

                <Row id="raters-row">
                    <Col xs={6} md={6}>
                        <Image id="rater-image" src="https://pmcvariety.files.wordpress.com/2020/03/joe-exotic.jpg" roundedCircle />
                    </Col>
                    <Row id="raters-data">
                        <Col xs={12} md={12}>
                            <Row id="raters-name">Dude1</Row>
                            <Row id="raters-highlights">
                                <ul>
                                    <li>I'm Dude1</li>
                                    <li>I am part of this group</li>
                                    <li>Cleveland > Boston</li>
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                </Row>

                <Row id="raters-row">
                    <Col xs={6} md={6}>
                        <Image id="rater-image" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Don_Cheadle_UNEP_2011_%28cropped%29.jpg" roundedCircle />
                    </Col>
                    <Row id="raters-data">
                        <Col xs={12} md={12}>
                            <Row id="raters-name">Dude2</Row>
                            <Row id="raters-highlights">
                                <ul>
                                    <li>I'm the other dude in the group</li>
                                    <li>Wings are my religion</li>
                                    <li>And I started a cult around them</li>
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </Container>
        )
    }
}