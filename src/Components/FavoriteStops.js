import React from "react";
import './FavoriteStops.css';
import Arrivals from "./Arrivals";

function FavoriteStops(props) {
    return (<div className='favorite-stops'>
        <div className="favorite-stops__header">Избранные остановки</div>
        {(props.favList.length > 0) &&
            props.favList.map((el, index) => (<div className="favorite-stops__item" key={el.id}>
                <p className="favorite-stops__item-name">{el.name}</p>
                <Arrivals id={el.id}></Arrivals>
                <br></br>
                <button onClick={() => props.onFavoriteRemove(el.id)}>Удалить из избранного</button>
            </div>))
        }
    </div>)
}

export default FavoriteStops;