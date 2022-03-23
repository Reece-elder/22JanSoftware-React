import { useState } from "react";

const Pizzeria = () => {

    // Because our state will be a type of Object, we must put in {} into the params
    const[pizzaData, setPizzaData] = useState({});

    // In order to aid creation, I will make a javascript object we can change
    let pizzaObj = {
        type: "",
        size: 0,
        stuffedCrust: false
    }

    const setStateFromObj = () => {
        setPizzaData(pizzaObj);
    };

    return ( 
        <>
            <form>
                <input type="text" name="pizzaType" placeholder="Enter Pizza type" value={pizzaObj.type} onChange={(event) => {pizzaObj.type = event.target.value}}/>
                <input type="number" name="pizzaSize" placeholder="Enter Pizza size" onChange={(event) => {pizzaObj.size = event.target.value}}/>
                <input type="radio" name="stuffedCrust" onChange={() => pizzaObj.stuffedCrust = true}/>
                <span> True </span>
                <input type="radio" name="stuffedCrust" onChange={() => pizzaObj.stuffedCrust = false}/>
                <span> False </span>
                {/* Sets the value of our Pizza state to be the current value of our object */}
                <button type="button" onClick={() => {setPizzaData(pizzaObj)}}> Click me to enter data! </button>
                <button type="button" onClick={setStateFromObj}> Click me to enter data! </button>
            </form>

            <h2> Pizza type: {pizzaData.type} </h2>
            <h2> Pizza size: {pizzaData.size} </h2>
            <h2> Pizza Stuffed crust: {pizzaData.stuffedCrust} </h2>
            {/* You can't do a toString of no data */}
        
        </>

     );
}
 
export default Pizzeria;