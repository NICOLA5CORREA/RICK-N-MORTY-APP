import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <article className="location-info">
      <div>
        <h2 className="title-info">{location?.name}</h2>
        <ul className="location-type">
          <li className="location-type-value"> <span className="type">Type:</span> <span >{location?.type}</span></li>
            <li className="location-type-value"> <span className="type">Dimension:</span> <span >{location?.dimension}</span></li>
            <li className="location-type-value"> <span className="type">Population:</span> <span >{location?.residents.length}</span></li>
        </ul>
      </div>
    </article>
  )
}

export default LocationInfo
