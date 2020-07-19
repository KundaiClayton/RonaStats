import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import ListBox from '../cards/ListBox';


const Ranks = () => {
  const [countryRank, setCountryRank] = useState([]);
  const [lastNumber, setLastNumber] = useState(0);
  const [showRow] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://covid19.mathdro.id/api/confirmed')
      .then(res => {
        setCountryRank(res.data)
      })
      .then(() => {
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const toggleProvinceState = (provinceState, countryRegion) => (
    provinceState && (provinceState !== countryRegion) ? `(${provinceState})` : ''
  )

  const showOrder = (countryRegion, index) => (
    <Fragment>{(countryRegion === 'Zimbabwe') ? lastNumber : index + 1}</Fragment>
  )

  useEffect(() => {
    countryRank.filter((data, index) => 
      data.countryRegion === 'Zimbabwe' ? setLastNumber(index + 1) : ''
    )
  }, [countryRank])

  return (
    <div className="content">
      {
        loading ? <h2>loading...</h2> : 
        <ol className="rank-list">
          {
            countryRank
            .filter((data, index) => (index < showRow || data.countryRegion === 'Zimbabwe' ))
            .map((data, index) => (
              <ListBox
                key={index} 
                index={index}
                data={data} 
                showOrder={(a, b) => showOrder(a, b)}
                toggleProvinceState={(a, b) => toggleProvinceState(a, b)}/>
            ))
          }
         
        </ol>
      }
    </div>
  )
}

export default Ranks;