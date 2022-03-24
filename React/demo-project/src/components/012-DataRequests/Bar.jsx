// Bar will be pulling the data down and saving it as a variable it can use

import {useEffect, useState} from 'react';
import axios from 'axios';

const Bar = () => {

    // State for the data we're pulling from the API
    const [data, setData] = useState([])

    // For pulling the data from the API when the page has loaded
    useEffect(() => {
        // axios is a simple asynchronous HTTP request library we install with npm i axios
        // To do a get request axios.get('url to get from')
        axios.get('https://api.punkapi.com/v2/beers?&per_page=80') // Sending a get request to the server

        // .then() - used for async code, do the method above, when it has returned something
        // put the return into this method and run
        .then((response) => {       // Take what axios returns, call it 'response' and print it out
            console.log(response.data);
            setData(response.data)  // An array of objects stored as state
            console.log(data);      // Won't show straightaway 
        })
    },[]) 

    return ( 
        <h2> Bar! </h2>
     );
}
 
export default Bar;