import React, {useState} from 'react'
import "./PizzaBooking.css";

  const totalSum = {
    "thin": 10,
    "medium" : 25,
    "thik": 30,
    "25sm" : 10,
    "30sm": 12,
    "35sm": 15
  }


function PizzaBooking(props) {
  const [inputValues, setInputValue] = useState({
    name: "",
    number: "",
    addres: "",
    radius: "",
    santimetr: "",
    tamato: "",
    curcumber: "",
    turkeymeat: "",
    mushroom: "",
    oilve: "",
    horsemeat: "",
    add: ""
  })



  const getValueInput = (e)=>{
    setInputValue((prev)=>{
      return{
        ...prev,
        [e.target.name] : e.target.value
      }
    })
    
  }
  
  const formWrapperSend=(e)=>{
    e.preventDefault();
    const  datas= {
      id: Math.random().toFixed(3),
      name: inputValues.name,
      number: inputValues.number,
      addres: inputValues.addres,
      radius: inputValues.radius,
      santimetr: inputValues.santimetr,
      tamato: inputValues.tamato,
      curcumber: inputValues.curcumber,
      turkeymeat: inputValues.turkeymeat,
      mushroom: inputValues.mushroom,
      oilve: inputValues.oilve,
      horsemeat: inputValues.horsemeat,
      add: inputValues.add };
      props.onDataHandler(datas);
  }

  return (
    <div  className='pizza'>
      <h1>Pizza Order</h1>
      <form onSubmit={formWrapperSend}>
        <div>
          <input type="text" onChange={getValueInput} name="name" placeholder='User Name' required/>
          <input type="number"  onChange={getValueInput} name="number" placeholder='User phone number' required/>
          <input type="text"  onChange={getValueInput} name="addres" placeholder='User Addres' required/>
        </div>
        <div>
          <h2>Dough thickness:</h2>
          <select onChange={getValueInput} name="radius" required>
            <option value="thin">Thin</option>
            <option value="medium">Medium</option>
            <option value="thick">Thick</option>
          </select>
        </div>
        <div>
          <h2>Size:</h2>
          <div>
            <label> 25sm
              <input type="radio" value="25sm" onChange={getValueInput} name="santimetr" />
            </label>
            <label> 30sm
              <input type="radio" value="30sm" onChange={getValueInput} name="santimetr"/>
            </label>
            <label> 35sm
            <input type="radio" value="35sm" onChange={getValueInput} name="santimetr"/>
            </label>
          </div>
        </div>
        <div>
          <h2>On Pizza:</h2>
          <div>
            <label> Tomato
              <input type="checkbox" onChange={getValueInput} name="tamato" value="Tomato"/>
            </label>
            <label> Pickled cucumber
              <input type="checkbox"onChange={getValueInput} name="curcumber" value="Pickled cucumber"/>
            </label>
            <label> Turkey meat
              <input type="checkbox" onChange={getValueInput} name="turkeymeat" value="Turkey meat"/>
            </label>
            <label> Mushroom
              <input type="checkbox" onChange={getValueInput} name="mushroom" value="Mushroom"/>
            </label>
            <label> Oilve
              <input type="checkbox" onChange={getValueInput} name="oilve" value="Oilve"/>
            </label>
            <label> Horse meat
              <input type="checkbox" onChange={getValueInput} name="horsemeat" value="Horse meat"/>
            </label>
          </div>
        </div>
        <div>
          <h2>Add:</h2>
          <div>
          <label> Pepper
              <input type="radio" name="add" onChange={getValueInput}  value="Pepper"/>
            </label>
            <label> Sausage
              <input type="radio" name="add" onChange={getValueInput}  value="Sausage"/>
            </label>
          </div>
        </div>
        <div>
          <button type='submit'> Save </button>
        </div>
      </form>
    </div>
  )
}

export default PizzaBooking
