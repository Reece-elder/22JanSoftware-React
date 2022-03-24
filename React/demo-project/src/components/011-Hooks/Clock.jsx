// This example will make use of State to store the current time
// And useEffect to specify when we want to re render our page - reload the components, run a method, refresh the page

import {useEffect, useState} from 'react';

const Clock = () => {

    // Setting our state to be the current time
    const[time, setTime] = useState(new Date().toLocaleTimeString())

    // Function that sets the time to be the current time
    const tick = () => {
        setTime(new Date().toLocaleTimeString());
    }

    // A function to specify when and how tick should be called
    // useEffect takes in an arrow function and a delay / frequency of running
    // 2nd param to pass into use effect is either [] - run once, [time] - run every time this state changes, 
    // runs everytime the page changes state or renders something new
    // useEffect(tick); // A bad way of running.. hopefully
    useEffect(() => {
        setTimeout(tick, 1000);      // Waits for x milliseconds and then does the passed in function
    },[time])       // Every time time state is changed run this method  

    // If your use effect changes state 'A', if you put [A] in your bottom of useEffect = infiniteLoop  

    return ( 
        <>
            <button type='button' onClick={tick}> Get Current Time </button>
            <p> {time} </p>
        </>
     );
}
 
export default Clock;