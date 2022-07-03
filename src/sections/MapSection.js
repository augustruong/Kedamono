import React from 'react'

function MapSection() {
  return (
    <div className='map-wrapper'>
      <div className='mapImg'></div>
      <div className='location-tag'>
          <img src={process.env.PUBLIC_URL + '/images/location-label.png'} className='location-label'/>
          <p className='location-text'>
              〒115-0045<br/> 
              東京都北区赤羽２丁目１６<br/> 
              パームビル赤羽３F<br/> 
              070-6409-8466
          </p>
      </div>
    </div>
  )
}

export default MapSection