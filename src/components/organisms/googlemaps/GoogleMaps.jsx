/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import GoogleMapReact from 'google-map-react'
import MapInt from '../../../images/map_int.svg'

const defaultProps = {
  center: {
    lat: 47.906449,
    lng: 33.397404,
  },
  zoom: 17,
}

const AnyReactComponent = ({ text }) => 

<div sx={{ display: 'flex', width: '57px', height: '79px',  }}>
  <MapInt />
</div>

const GoogleMap = () => (
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: 'AIzaSyCi_UGl2eABWh5ZlVdRhUFm1DNa2GacYfw' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={47.906449}
        lng={33.397404}
        text={'Kreyser Avrora'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap