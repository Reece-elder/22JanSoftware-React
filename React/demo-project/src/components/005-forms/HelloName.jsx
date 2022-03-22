import {useState} from 'react';
const HelloName = () => {

    // Implement state for a value called name, name is equal to '' as default
    const[name, setName] = useState('');

    return ( 
        <div>
            <h2> Hello {name} </h2>
            {/* OnChange -> Creates an 'event' whenever it detects a change, the event contains the value of the input field */}
            <input type="text" name='name field' placeholder='please enter name' value={name} onChange={(event) => setName(event.target.value)}/> 
        </div>

     );
}
 
export default HelloName;