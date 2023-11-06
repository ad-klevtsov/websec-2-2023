import React from "react";
import { Marker } from "react-leaflet";

function Stops(props) {
    if (props.stopsList.length > 0) {
        return (<div>
            {props.stopsList.map((el) => (
                <Marker key={parseInt(el.KS_ID['#text'])} position={[parseFloat(el.latitude['#text']), parseFloat(el.longitude['#text'])]} />
            ))}
        </div>)
    }
}

export default Stops;