import React,{useState,useEffect} from 'react'
import axios from 'axios'


function Flags({country,countryName,flag}) {
//     console.log(countryName)
//     const url=`https://restcountries.eu/rest/v2/name/${countryName}`
//    // const url=`https://public-us.opendatasoft.com/api/records/1.0/search/?dataset=country-flags&q=&facet=${country}`
//     const [flag,setFlag]=useState({})
//     useEffect(() => {
//         const getFlag= async ()=>{
//             const res=await axios.get(url)
//             console.log(res.data)
//             setFlag(res.data)
//         }
//         getFlag()
//     }, [])
    return (
        <div>
           <img src={flag.flag}/>
           <h2>{flag.name}</h2>
           
        </div>
    )
}

export default Flags
