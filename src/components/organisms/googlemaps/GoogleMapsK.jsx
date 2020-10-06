/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import GoogleMapReact from 'google-map-react'
import MapInt from '../../../images/map_int.svg'

const defaultProps = {
  center: {
    lat: 50.437519,
    lng: 30.517512,
  },
  zoom: 17,
}

const AnyReactComponent = ({ text }) => 

<div sx={{ display: 'flex', width: '57px', height: '79px',  }}>
  <MapInt />
</div>

const GoogleMapK = () => (
  <div
    sx={{
      height: ['100vh', '40vh', '100vh'],
      width: '100%',
      overflow: 'hidden',
      borderRadius: '10px',
      border: '2px solid #ffffff',
    }}
  >
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: 'AIzaSyCi_UGl2eABWh5ZlVdRhUFm1DNa2GacYfw' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={50.437519}
        lng={30.517512}
        text={'Kreyser Avrora'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMapK