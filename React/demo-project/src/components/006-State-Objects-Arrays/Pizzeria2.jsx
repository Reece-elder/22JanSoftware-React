import { useState } from "react";

const Pizzeria2 = () => {

    // An example object to use for our state
    const pizzaObj = {
        type: "",
        size: 0, 
        customer: ""
    };

    // With my state I've set the default to be our example object, with default values included 
    const [pizzaData, setPizzaData] = useState(pizzaObj);

    // This method is called when the input field detects a change
    // It takes in an (event) -> contains the input field type, value and any other params
    const setObject = (event) => {
        const {name, value} = event.target; // Pulling the name and value attributes out of the event 
        setPizzaData((prevValue) => ({      // Starting the setting value of our state and passing in the current value of pizza
            ...prevValue,                   // ...Spread operator - Ignore the existing stuff, and put this at the end 
            [name]: value,                  // Change the attribute of [name] (type, size etc.) to the value we passed in 
        }));
    };

    const postData = () => {
        // fetch(.post(pizzaData))
        console.log(pizzaData);
        setPizzaData(pizzaObj); // Set the fields to be their default value, resetting the input fields 
    }

    return (
        <>
            <input name="type" value={pizzaData.type} onChange={setObject} placeholder="enter pizza type" type="text"/>
            <input name="size" value={pizzaData.size} onChange={setObject} placeholder="enter pizza size" type="number"/>
            <input name="customer" value={pizzaData.customer} onChange={setObject} placeholder="Enter customer name" type="text"/>
            <button type="button" onClick={postData}> Click me to print data</button>
        </>
    );
}
 
export default Pizzeria2;