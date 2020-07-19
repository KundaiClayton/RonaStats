import React, { Fragment } from 'react';

const ListBox = (props) => {
  return (
    <Fragment>
      <li>
        <div className="rank-number">
          <div className="position">
            { props.showOrder(props.data.countryRegion, props.index) }
          </div>
        </div>
        
        <div className="rank-content">
          <div className="country-name">
            {props.data.countryRegion.split(', ').reverse().join(' ')} {' '}
            <span className="province-state-name">{props.toggleProvinceState(props.data.provinceState, props.data.countryRegion)}</span>
          </div>

          <div className="case-summary">
            <span className="case-summary-text text-warning">{props.data.confirmed}</span>
            <span className="case-summary-text text-success">{props.data.recovered}</span>
            <span className="case-summary-text text-danger">{props.data.deaths}</span>
          </div>
        </div>
      </li>
      {
        (props.index + 1 === 10) ? <div className="list-box-separator"></div> : ''
      }
    </Fragment>
  )
}

export default ListBox;