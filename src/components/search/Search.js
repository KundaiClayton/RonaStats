import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from "react-bootstrap"

const Search=({getQuery}) =>{
    const [text,setText]=useState('')
    const onChange=(q)=>{
        setText(q)
        getQuery(q)
    }
 
    return (
        <div>
            <Container >
                <Row>
                    <Col>
                    <div>
                        <form >
                        <input 
                            type="text" 
                            name="text" 
                            placeholder="Search Country..."
                            value={text}
                            onChange={(e)=>onChange(e.target.value)}
                            autoFocus
                        />
                        </form>
                       
                        
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Search
