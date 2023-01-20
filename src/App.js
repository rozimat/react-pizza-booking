import React, {useState} from 'react';
import './App.css';
import Main from './main/Main';
import PizzaBooking from './pizzaBooking/PizzaBooking';


function App() {
  const [dataPizza, setDataPizza] = useState([]);
  function DataHandler(datas){
    setDataPizza((prev)=>{
      return[datas, ...prev];
    });
  };
  function deleteFunction(id){
    const newDataPizza = dataPizza.filter((item)=>item.id !==id);
    setDataPizza(newDataPizza);
  }
  return (
    <div className="App">
      <PizzaBooking onDataHandler={DataHandler} />
      <Main ondataPizza={dataPizza} OndeleteFunction={deleteFunction}/>
    </div>
  );
}

export default App;
