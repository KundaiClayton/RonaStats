import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Card,Button} from "react-bootstrap"

export default function navBar() {
    const styles={
        color:'black',
        textDecoration:'none'
    }
    return (
      
        <nav >
         <Link to="/" style={styles}>
           <h2 style={{textAlign:'center'}}>RonaStats</h2> 
           </Link>
           <ul className="nav-links">
                <Link to ="/" style={styles}>
                 <li>Home</li>
               </Link>
               <Link to="/rank"  style={styles}>
                 <li>Ranks</li>
               </Link>
               
               <Link to="/about"  style={styles}>
                 <li>About</li>
               </Link>
              
           </ul> 
        </nav>
    )
}