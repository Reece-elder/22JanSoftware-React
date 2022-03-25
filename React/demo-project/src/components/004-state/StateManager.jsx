import {useState} from 'react';
import StateButton from './StateButton';
import Counter from './Counter';
const StateManager = () => {

    // Within the arrow function but above our return we set the state
    // const [ nameOfYourState, setNameOfYourState] = useState we have to import ('starting value of the state')
    const [total, setTotal] = useState(0);

    // Make a function here that we pass in 
    // takes the current value of total, increases it by 1
    const updateTotal = () => {
        setTotal(total + 1);
    };

    return ( 
        // Our button takes in a custom function to increase the value
        // Our counter just takes in the state we created 
        <>
        {/* Rather than passing in our updateTotal function, I can pass in my setter */}
            <StateButton updateTotal={setTotal} total={total}/>
            <Counter total={total}/>
        </>

     );
}
 
export default StateManager;