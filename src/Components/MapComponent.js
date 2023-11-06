import React from "react";
import L from 'leaflet';
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import './MapComponent.css';
import xmlToJson from '../xmlToJson'
import Stops from "./Stops";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

const stops = await fetch("https://tosamara.ru/api/v2/classifiers/stopsFullDB.xml")
    .then(response => response.text())
    .then(str => new DOMParser().parseFromString(str, "text/xml"))
    .then(result => { return xmlToJson(result).stops });

// console.log(stops.stop[4]);
// console.log(parseFloat(stops.stop[4].latitude['#text']));
// console.log(parseFloat(stops.stop[4].longitude['#text']));
// console.log(parseInt(stops.stop[4].KS_ID['#text']));

function MapComponent(props) {
    return (
        <MapContainer zoom={props.zoom} center={[props.lat, props.lng]}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[props.lat, props.lng]}>
                <Popup>Тестовый текст</Popup>
            </Marker>
            <Stops stopsList={stops.stop} />
        </MapContainer>
    );
};

export default MapComponent;