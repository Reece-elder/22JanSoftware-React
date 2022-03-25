import {useState} from 'react';
import axios from 'axios';
import Beer from './Beer';

const BarOtherFunctions = () => {

    const [data, setData] = useState([]);
    const [id, setId] = useState(1);
  
    const [loaded, setLoaded] = useState(false); 
  
    const [error, setError] = useState(null);

    let tempId = 0;

    const getBeerById = () => {

        axios.get(`https://api.punkapi.com/v2/beers/${id}`)
        .then((response) => {
            console.log(response.data);
            setLoaded(true);
            setData(response);
        }).catch((error) => {
            setLoaded(true);
            setError(error);
        })

    }

    if(error)  { // If there is an error or if error is not null (undefined)
        return (
            <>
                <input type="text" onChange={(e) =>setId(e.target.value)}/>
                <button type='button' onClick={getBeerById}> Click me for a beer </button> 
                <p> Oops, there has been an error D: {error.message}</p>
            </>
        )
    } else if (!loaded) {  // if loaded is false
        return (
            <>
                <input type="text" onChange={(e) =>setId(e.target.value)}/>
                <button type='button' onClick={getBeerById}> Click me for a beer </button> 
        </>

        ) 

    } else {
        return (
            <div>
                <input type="text" onChange={(e) =>setId(e.target.value)}/>
                <button type='button' onClick={getBeerById}> Click me for a beer </button> 
                <Beer data={data[0]}/>

            </div>
          );
        };
}
 
export default BarOtherFunctions;