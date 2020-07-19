import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Cards from '../cards/Cards';
import Search from '../search/Search';
import Flags from '../cards/Flags';
import Graph from '../cards/Graph';
import {Container,Row,Col,Card,Button} from "react-bootstrap"

function Home() {
  const [items,setCountries]=useState([])
  const [countryList,setCountryList]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [isGlobal,setGlobal]=useState('')
  const [isCountryName,setCountryName]=useState('')
  const [query,setQuery]=useState('')
  const [flag,setFlag]=useState([])
  

  useEffect(()=>{
      //fetches global summary if nothing has been searched
    
  if(query==='country' || query.length===0){
    const globalSummary=async ()=>{
      const res =await axios.get(`https://covid19.mathdro.id/api`)
     // console.log(res)
      setCountries(res.data)
      setIsLoading(false)
      setGlobal('global Summary')
    }
    globalSummary()
    ///fetches summary of searched country
  }else{
    const fetchItems=async ()=>{
      const res=await axios.get(`https://covid19.mathdro.id/api/countries/${query}`)
      //console.log(res)
      setCountries(res.data)
      setIsLoading(false)
      setGlobal(query+' '+ 'Summary')
     setCountryName(query)
  }
  const getFlag= async ()=>{
    const url=`https://restcountries.eu/rest/v2/name/${query}`
    //const url=`https://public-us.opendatasoft.com/api/records/1.0/search/?dataset=country-flags&q=&facet=${query}`
    const res=await axios.get(url)
    console.log(res.data)
    setFlag(res.data)
}
  getFlag()
  fetchItems()
  //fetch countrylist
  
}
 },[query])

  return (
     <Container >
    
       <Search getQuery={(q)=>setQuery(q)}/>
       <Flags flag={flag}/>
       {/* <Flags country={query} countryName={isCountryName}/> */}
      
        <Cards country={items} isLoading={isLoading} isGlobal={isGlobal}></Cards>
        <Graph country={items} countryName={isGlobal}/>
      
     </Container>
     
  );
}

export default Home
