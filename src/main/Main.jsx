import React,{useState} from 'react'
import  "./Main.css";

function Main(props) {
  
  return (
    <div>
      {
        props.ondataPizza.map(item=> 
            <div className="order" key={item?.id}>
              <div>
                <b>Name: <small>{item.name}</small></b>
                <b>Tel number: <small>{item.number}</small></b>
                <b>Addres: <small> {item.addres}</small></b>
              </div>
              <div>
                <h2></h2>
                <span>Dough thikness:{item.radius}</span>
                <span>Size:{item.santimetr}</span>
              </div>
              
            <div>
              <h2>On Pizza:</h2>
              <span>{item.tamato}</span>
              <span>{item. curcumber}</span>
              <span>{item.turkeymeat}</span>
              <span>{item.mushroom}</span>
              <span>{item.oilve}</span>
              <span>{item.horsmeat}</span>
            </div>
              <h3>Add: {item.add}</h3>
              <h2>Total: <small>${item.total}</small></h2>
              <button onClick={()=>props.OndeleteFunction(item.id)}> Delete</button>
            </div>

          )
      }
    </div>
  )
}

export default Main
