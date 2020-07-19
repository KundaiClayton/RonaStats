import React,{useState,useEffect} from 'react'

import {Container,Row,Col,Card,Button} from "react-bootstrap"


export default function countryList({countryList,isLoading}) {
    const [countryList, setCountryList] = useState(initialState)
    useEffect(() => {
        const getCountryList= async ()=>{
            const res =await axios.get(`https://covid19.mathdro.id/api/countries`)
            console.log(res)
             setIsLoading(false)
             setCountryList(res.data)
          }
          getCountryList()
        
    }, [])
    return isLoading ? <h1>Loading...</h1>:<section>
          {countryList.map(item=>(
             <div>{item.countries}</div>
         ))} 
        
    </section>
    
}