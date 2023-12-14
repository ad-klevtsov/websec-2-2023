import React, { useState } from 'react';
import MapComponent from './Components/MapComponent';
import './index.css'
import FavoriteStops from './Components/FavoriteStops';

function App() {
  const [favStops, setFavStops] = useState([]);

  function onfavoriteAdd(newFav) {
    if (favStops.find(stop => stop.name === newFav.name) === undefined) {
      setFavStops([...favStops, newFav]);
      console.log('Добавлена избранная остановка');
    }
    // console.log(favStops);
  }

  function onFavoriteRemove(index) {
    setFavStops(favStops.filter(fav => fav.id !== index));
    console.log('Остановка удалена из избранного');
    // console.log(favStops);
  }

  return (<div className='wrapper'>
    <main className='map-container'>
      <MapComponent onFavoriteAdd={onfavoriteAdd} />
    </main>
    <aside>
      <FavoriteStops favList={favStops} onFavoriteRemove={onFavoriteRemove} />
    </aside>
  </div>);
}
export default App;
