import { useState } from "react";

const Login = () => {
  // Make State for my username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Create temp variables for our username and password
  let tempUser;
  let tempPass;

  // When this function runs, it sets the value of our state to be the temp values
  const loginFunc = () => {
      setUsername(tempUser);
      setPassword(tempPass);
  }

//   <div> - Divider <form> <article> <footer> <nav> <pagebody> 

  return (
    <div>
      <form>
          {/* When the input changes, save the event and pass it into the arrow function */}
          {/* When the input field detects a change, it creates an event (contains the value, the input field, when, other metadata) */}
          <input type="text" value={username} placeholder="enter username" onChange={(zipZoop) => setUsername(zipZoop.target.value)}/>
          <input type="password" value={password} placeholder="enter password" onChange={(zipZoop) => setPassword(zipZoop.target.value)}/>

          <h2> Use these to login without setting state straight away</h2>
          <input type="text" value={tempUser} placeholder="enter username" onChange={(e) => tempUser = e.target.value}/>
          <input type="password" placeholder="enter password" onChange={(e) => tempPass = e.target.value}/>
          <button type="button" onClick={loginFunc}> Click me to submit data </button>
      </form>
      <div>
          <h2> Username: {username}</h2>
          <h2> Password: {password}</h2>
      </div>
    </div>
  );
};

export default Login;
