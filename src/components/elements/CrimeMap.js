import React from 'react'
import Leaflet from 'leaflet';
import  { Map, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


export const CrimeMap = ({lat, lon}) =>    {

    const position = [lat, lon]
    return (
      <Map  center={position} zoom= {13}>

       <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
        id = 'mapbox.streets'
        accessToken='pk.eyJ1IjoiamFib2xlbyIsImEiOiJjanhiczhibWYwM2FuM3RtbWYyaWc5cGJhIn0.eQRTlVKlb4QCCCMN9_a1Yw'
      />

        <Marker position={position} />

      </Map>
    )

}