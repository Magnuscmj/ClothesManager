import { Button, Col, Row } from 'react-bootstrap'
import React, { FC } from 'react'
import { FrontPageTitleSection } from '../components/frontPage/FrontPageTitleSection'
import { Link } from 'react-router-dom'
import { SiteIntro } from '../components/frontPage/SiteIntro'


export const frontPage: FC = () => {
    return (
        <div>
            <FrontPageTitleSection />
            <SiteIntro />
            <Row className="justify-content-md-center">
                <Col sm="auto">
                    <Link to="/createPage">
                        <Button className="addNewButton" type='button' variant='primary' value='Add a product!'>Add a product!</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}
