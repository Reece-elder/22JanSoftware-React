// Bar will be pulling the data down and saving it as a variable it can use

import { useEffect, useState } from "react";
import axios from "axios";
import Beer from "./Beer";

const Bar = () => {
  // State for the data we're pulling from the API
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(20);

  // How do we deal with data that takes a while to load?
  // We want the user to know data is loading, otherwise they think its broken
  const [loaded, setLoaded] = useState(false); // at run time the data is not loaded

  // How do we deal with data when there is an error?
  const [error, setError] = useState(null); // at run time there is no error

  // For pulling the data from the API when the page has loaded
  useEffect(() => {
    setTimeout(() => {
      // axios is a simple asynchronous HTTP request library we install with npm i axios
      // To do a get request axios.get('url to get from')
      axios.get(`https://api.punkapi.com/v2/beers?&per_page=${amount}`) // Sending a get request to the server

        // .then() - used for async code, do the method above, when it has returned something
        // put the return into this method and run
        .then((response) => {
          // Take what axios returns, call it 'response' and print it out
          setLoaded(true); // if there is a response, loaded = true

          setData(response.data); // An array of objects stored as state
        }).catch((error) => {
          // If an error is thrown, pass it in here and deal with it
          setLoaded(true);
          setError(error);
        });
    }, 3000);
  }, [amount]); // everytime the state 'amount' is updated the useEffect runs again


  // Make if else statements to determine what our react app should return
  if(error)  { // If there is an error or if error is not null (undefined)
    return <p> Oops, there has been an error D: {error.message}</p>
} else if (!loaded) {  // if loaded is false
    return <p> Please wait, data is loading :)</p>
} else {
    return (
        <div>
          <p> Enter amount of beers to show! </p>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
    
          {data.map((beer, key) => {
            return <Beer data={beer} key={key} />;
          })}
        </div>
      );
    };
}


  

export default Bar;
