import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Bar} from 'react-chartjs-2'
import {Container,Row,Col,Card,Button} from "react-bootstrap"

function Graph({country,countryName}) {
    const barChart = (
        country.confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['#f0ad4e', '#5cb85c', '#d9534f'],
                  data: [country.confirmed.value, country.recovered.value, country.deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Graphical ${countryName}` },
            }}
          />
        ) : null
      );
    
    return (
        <div className="graph">
            <Container >
                <Row>
                    <Col md>
                       
                        {barChart} 
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Graph
