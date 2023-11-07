import React, { useState, useEffect } from "react";
import getArrivals from "../getArrivals";

function Arrivals(props) {
    const [arrivalsInfo, setArrivalsInfo] = useState(null);
    useEffect(() => {
        getArrivals(props.id).then((res) => {
            console.log('Получена информация о прибывающем транспорте');
            setArrivalsInfo(res.arrival)
        })
        return () => console.log('Запрошена информация о прибывающем транспорте');
    }, []);
    if (arrivalsInfo) {
        if (arrivalsInfo.length > 0) {
            return (<div>
                {arrivalsInfo.map((el) => (
                    <p key={parseInt(el.KR_ID['#text'])}> {el.type} №{el.number} через {el.time} минут</p>
                ))}
            </div>)
        }
        else {
            return (<div>В ближайшее время транспорта нет</div>)
        }
    }
    else {
        return (<div>Получаем информацию о прибывающем транспорте</div>)
    }
}

export default Arrivals;