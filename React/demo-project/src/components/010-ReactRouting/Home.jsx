// React is a 'Single-Page-Application' - Meaning the page doesn't refresh and the data around you changes for other pages
// Based on links and user input, different components should be rendered (your separate pages)
// Benefit of single page apps is the client (user) does not have to reload data with every new page

import NavBar from "./NavBar";

// npm i react-router-dom

const Home = () => {
  return (
    <>
      <h3> Home! </h3>
    </>
  );
};

export default Home;
