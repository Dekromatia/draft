
import React from 'react'

function ManufactsList(props) {
  return (
    <div>
        {props.manufacts && props.manufacts.map(manufact => {
    return (
        <div key = {manufact.id}>
          <h2>{manufact.manufact_center}</h2>
          <p>{manufact.manufact_latitude}</p>
          <p>{manufact.manufact_longitude}</p>
        </div>
      )
    })}
    </div>
  )
}

export default ManufactsList