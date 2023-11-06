import React from 'react';
import MapComponent from './Components/MapComponent';
import './index.css'
import FavoriteStops from './Components/FavoriteStops';

function App() {
  return (<div className='wrapper'>
    <main className='map-container'>
      <MapComponent/>
    </main>
    <aside>
      <FavoriteStops />
    </aside>
  </div>);
}
export default App;
