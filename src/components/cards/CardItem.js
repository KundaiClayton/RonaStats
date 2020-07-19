import React from 'react'
import {Container,Row,Col,Card,Button} from "react-bootstrap"
import CountUp from  'react-countup'

const styles={
    margin:'auto',
    textAlign:'center'
}

const CardItem = ({country,global}) => {
    return (
        <Container className="container" >
        <h3 style={styles}>{global}</h3>
            <Row className="justify-content-md-center">
                <Col md="auto" >
                 <Container>
                    <Card border="warning" style={{ width: '22rem' ,margin:'1rem'}}>
                    <Card.Body>
                        <Card.Title>Confirmed</Card.Title>
                        <Card.Text>
                        <h5 style={ { color:'#f0ad4e' }}> <CountUp end={country.confirmed.value} duration={1.5}/></h5>
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted"><h6>Number of active cases of covid-19</h6></Card.Subtitle>
                    </Card.Body>
                    <Card.Footer className="blockquote-footer">{new Date(country.lastUpdate).toDateString()}</Card.Footer>
                    </Card>
                    </Container>
                </Col>
                <br/>
                <Col  md="auto" >
                    <Container>
                    <Card border="success" style={{ width: '22rem',margin:'1rem' }}>
                    <Card.Body>
                        <Card.Title>Recovered</Card.Title>
                        <Card.Text>
                        <h5 style={ { color:'#5cb85c' }}><CountUp end={country.recovered.value} duration={1.5}/></h5>
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted"><h6>Number of Recovered cases of covid-19</h6></Card.Subtitle>
                    </Card.Body>
                    <Card.Footer className="blockquote-footer">{new Date(country.lastUpdate).toDateString()} </Card.Footer>
                    </Card>
                    </Container>
                </Col>
                <Col  md="auto">
                    <Container>
                    <Card  border="danger" style={{ width: '22rem',margin:'1rem' }}>
                    <Card.Body>
                        <Card.Title>Deaths</Card.Title>
                        <Card.Text>
                        <h5 style={ { color:'#d9534f' }} ><CountUp end={country.deaths.value} duration={1.6}/></h5>
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted"><h6>Number of deaths due to covid-19</h6></Card.Subtitle> 
                    </Card.Body>
                    <Card.Footer className="blockquote-footer">{new Date(country.lastUpdate).toDateString()} </Card.Footer>
                    </Card>
                    </Container>
                </Col>
            </Row>
       
            </Container>
    )
}

export default CardItem
