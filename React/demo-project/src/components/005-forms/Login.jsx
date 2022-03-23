import { useState } from "react";
import Display from "./Display";
import Form from "./Form";

const Login = () => {
  // Make State for my username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Create temp variables for our username and password

  // When this function runs, it sets the value of our state to be the temp values
  const loginFunc = (user, pass) => {
      setUsername(user);
      setPassword(pass);
  }

//   <div> - Divider <form> <article> <footer> <nav> <pagebody> 

  return (
    <div>
      <Form loginFunc={loginFunc}/>
      <Display username={username} password={password}/>
    </div>
  );
};

export default Login;
