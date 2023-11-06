import React, { useEffect, useState } from "react";
import L from 'leaflet';
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import './MapComponent.css';
import xmlToJson from '../xmlToJson'
import Stops from "./Stops";
import './Stops.css';

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

    const [stopsVisibility, setStopsVisibility] = useState(false);

    const onVisibilityToggle = () => {
        setStopsVisibility(cur => !cur);
    }

    const [location, setLocation] = useState(null);

    function getLocationSuccess(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation({ latitude, longitude });
        console.log(`Широта: ${latitude}, Долгота: ${longitude}`);
    }

    function getLocationError() {
        setLocation({ latitude: 53.213917354263195, longitude: 50.1752420233374 });
        console.log("Не удалось получить геопозицию пользователя");
    }

    useEffect(() => navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError), []);

    if (location) {
        return (
            <MapContainer zoom="17" center={[location.latitude, location.longitude]}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <div className="stops-toggle">
                    <label htmlFor="layertoggle">Показать остановки </label>
                    <input type="checkbox"
                        name="layertoggle"
                        id="layertoggle"
                        value={stopsVisibility}
                        onChange={onVisibilityToggle}
                    />
                </div>

                {stopsVisibility &&
                    <Stops stopsList={stops.stop} />
                }

                <Marker position={[location.latitude, location.longitude]}>
                    <Popup>Текущая геопозиция</Popup>
                </Marker>
            </MapContainer>
        );
    }
};

export default MapComponent;