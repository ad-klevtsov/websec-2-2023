import React from "react";
import L from 'leaflet';
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import './MapComponent.css';

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponent extends React.Component {
    state = {
        lat: 55.702868,
        lng: 37.530865,
        zoom: 10
    };

    render() {
        var center = [this.state.lat, this.state.lng];

        return (
            <MapContainer zoom={this.state.zoom} center={center}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={center}>
                    <Popup>Тестовый текст</Popup>
                </Marker>
            </MapContainer>
        );
    }
};

export default MapComponent;