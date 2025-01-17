import React from "react";
import { Marker, Popup } from "react-leaflet";
import Arrivals from "./Arrivals";

function Stops(props) {
    function onFavoriteButtonClick(id, title, direction) {;
        let fav = {
            id,
            name: `Остановка ${title} ${direction}`,
        }
        props.onFavoriteAdd(fav);
    }
    if (props.stopsList.length > 0) {
        console.log('Остановки сгенерированы'); 
        return (<div>
            {props.stopsList.map((el) => (
                <Marker key={parseInt(el.KS_ID['#text'])} position={[parseFloat(el.latitude['#text']), parseFloat(el.longitude['#text'])]}>
                    <Popup>
                        <button className="favorite-button" onClick={() => onFavoriteButtonClick(el.KS_ID['#text'], el.title['#text'], el.direction['#text'])}>Добавить в избранное</button>
                        <p>Остановка "{el.title['#text']}" {el.direction['#text']}</p>
                        <p>Прибывают:</p>
                        <Arrivals id={el.KS_ID['#text']}/>
                    </Popup>
                </Marker>
            ))}
        </div>)
    }
}

export default Stops;