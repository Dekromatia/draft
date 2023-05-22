
import React from 'react'

function SitesList(props) {
  return (
    <div>
        {props.sites && props.sites.map(site => {
    return (
        <div key = {site.id}>
          <h2>{site.site_name}</h2>
          <p>{site.site_latitude}</p>
          <p>{site.site_longitude}</p>
          
        </div>
      )
    })}
    </div>
  )
}

export default SitesList