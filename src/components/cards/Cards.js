import React from 'react'
import CardItem from './CardItem'
import {Container,Row,Col,Card,Button} from "react-bootstrap"

export default function Cards({country,isLoading,isGlobal}) {
    return isLoading ? <h1>Loading...</h1>:<section>
         {/* {country.map(item=>(
             <div>{item.confirmed}</div>
         ))} */}
         <Container >
            <CardItem country={country} global={isGlobal}></CardItem> 
         </Container>
        
    </section>
    
}
