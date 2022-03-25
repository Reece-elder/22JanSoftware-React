import {useState} from 'react';
import ToDoNote from './ToDoNote';

const ToDoManager = () => {

    // Implement state for our array of data 
    const[data, setData] = useState([])

    // Implement state for my current todo note
    const[toDo, setToDo] = useState("");

    // What to do when we click the submit button 
    const addToArray = () => {             // New arrow function which will be called when we click the button
        setData((currentData) => {         // Setting the state and passing in the currentData as a paramater
            return [...currentData, toDo]  // Ignoring what is currently in the array, put the latest object at the end 
        })
        setToDo("");                       // Setting the value of todo back to ""
        // console.log(data);              // Set state is asynchronous, console.log isnt waiting for the state to be set 
    }

    return ( 
        <>
            <input type="text" name='todoNote' onChange={(e) => setToDo(e.target.value)} value={toDo} placeholder="Enter to do note"/>
            <button type='button' onClick={addToArray}> Add me to-do list! </button>
            {/* Passing in our data as a prop to our ToDoNote component */}
            <ToDoNote data={data}/> 
        </>
     );
}
 
export default ToDoManager;