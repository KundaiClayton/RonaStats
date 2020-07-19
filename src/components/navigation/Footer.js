import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
function Footer() {
    return (
        <div className="main-footer">
            <Container>
                <Row>
                    <Col style={{marginBottom:'10px'}}>created by Mdar_Clayy &copy;{new Date().getFullYear()} | All rights reserved </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
