import React, { FC } from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import clothesImage from '../../assets/images/clothes.png'

export const SiteIntro : FC = () => {
    return (
        <Container style={{padding: "50px"}}>
            <Row className="justify-content-md-center">
                <Col sm={2}>
                    <h3>Keep track of your wearable things!</h3>
                    <p>This site is here for you that want to keep track of what own of wearable products! Add, edit or delete items you have!</p>
                </Col>
                <Col sm="auto">
                    <img style={{maxWidth: "500px", borderRadius: "10px"}} src={clothesImage} alt="clothes"/>
                </Col>
            </Row>
        </Container>
    )
}
