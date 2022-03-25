// This component will save object as a state

import {useState} from 'react';

const Garage = () => {

    const [vehicle, setVehicle] = useState({});

    // Simple vehicle object
    const vehicleObj = {
        colour: "",
        wheels: 0,
        electric: false    
    };

    return ( 
        <>
        {/* When we enter some data, set the value of the colour property to be this input field */}
            <input type="text" onChange={(e) => vehicleObj.colour = e.target.value} placeholder="Enter a colour!"/>
            <input type="number" onChange={(e) => vehicleObj.wheels = e.target.value} placeholder="Enter number of wheels!"/>
            <input type="checkbox" onChange={(e) => vehicleObj.electric = e.target.value}/>
            <button type='button' onClick={() => setVehicle(vehicleObj)}> Set Vehicle! </button>
            <button type='button' onClick={() => console.log(vehicle)} > Print Vehicle! </button>
        </>
     );
}
 
export default Garage;