import React, {useState} from 'react';
import './App.css';
import Main from './main/Main';

import PizzaBooking from './pizzaBooking/PizzaBooking';
function App() {
  const [dataPizza, setDataPizza] = useState();
  return (
    <div className="App">
      <PizzaBooking onsetDataPizza={setDataPizza}/>
      <Main ondataPizza={dataPizza}/>
    </div>
  );
}

export default App;
