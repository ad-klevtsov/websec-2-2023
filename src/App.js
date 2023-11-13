import React, { useState } from 'react';
import MapComponent from './Components/MapComponent';
import './index.css'
import FavoriteStops from './Components/FavoriteStops';

function App() {
  const [favStops, setFavStops] = useState([]);
  function onfavoriteAdd(newFav) {
    if (favStops.find(stop => stop.name === newFav.name) === undefined) {
      setFavStops([...favStops, newFav]);
    }
    console.log(favStops);
  }
  return (<div className='wrapper'>
    <main className='map-container'>
      <MapComponent onFavoriteAdd={onfavoriteAdd} />
    </main>
    <aside>
      <FavoriteStops favList={favStops} />
    </aside>
  </div>);
}
export default App;
