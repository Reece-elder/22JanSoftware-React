import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import FirstComponent from './components/001-components-intro/FirstComponents';
import ArticlePage from './components/002-componentHierarchy/ArticlePage';
import ContactCardManager from './components/003-props/ContactCardExercise/ContactCardManager';
import Manager from './components/003-props/Manager';
import StateManager from './components/004-state/StateManager';
import HelloName from './components/005-forms/HelloName';
import Login from './components/005-forms/Login';
import Garage from './components/006-State-Objects-Arrays/Garage';
import Pizzeria from './components/006-State-Objects-Arrays/Pizzeria';
import Pizzeria2 from './components/006-State-Objects-Arrays/Pizzeria2';
import ShopManager from './components/007-State-Array/ShopManager';
import ToDoManager from './components/007-State-Array/ToDoManager';
import Pokedex from './components/008-ExternalData/Pokedex.jsx';
import BootStrapDemo from './components/009-ExternalLibraries/BootStrapDemo';
import Home from './components/010-ReactRouting/Home';
import About from './components/010-ReactRouting/About';
import Shop from './components/010-ReactRouting/Shop';
import NavBar from './components/010-ReactRouting/NavBar';

// Calls the component Router rather than BrowserRouter
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/010-ReactRouting/Footer';
import Item from './components/010-ReactRouting/Item';
import Clock from './components/011-Hooks/Clock';
import ChangeTitle from './components/011-Hooks/ChangeTitle';
import Bar from './components/012-DataRequests/Bar';
import BarOtherFunctions from './components/012-DataRequests/BarOtherFunctions';
import ProfileManager from './components/013-OtherDataRequests/ProfileManager';







// Within React, the data that is rendered is what each component (app.js) returns

function App() {
  // Everything between the return() is considred html 
  // If you want to add JS to your html it must be contained within {}

  // HTML elements are ALWAYS lowercase (img, div, h1, span etc)
  // React differentiates HTML to components as Components are ALWAYS uppercase (FirstComponent) 
  return (
    <div className="App">
      {/* Our app is rendering whatever FirstComponent renders */}
      {/* <FirstComponent/>  */}
      {/* <ArticlePage/> */}
      {/* <Manager/> */}
      {/* <ContactCardManager/> */}
      {/* <StateManager/> */}
      {/* <HelloName/> */}
      {/* <Login/> */}
      {/* <Garage/> */}
      {/* <Pizzeria/> */}
      {/* <Pizzeria2/> */}
      {/* <ToDoManager/> */}
      {/* <ShopManager/> */}
      {/* <Pokedex/> */}
      {/* <BootStrapDemo/> */}
      {/* <Router> */}
        {/* <NavBar/> */}
        {/* <Routes>  */}
          {/* Route takes in two things, path = "/home", element = the component to render */}
          {/* <Route path = "/" element={<Home/>} /> */}
          {/* <Route path = "/about" element={<About/>}/> */}
          {/* <Route path = "/shop" element={<Shop/>}/> */}
          {/* : denotes the next thing (itemId) is the name of the url parameter to enter */}
          {/* <Route path = "/item/:itemId" element={<Item/>}/> */}
        {/* </Routes> */}
        {/* <Footer/> */}
      {/* </Router> */}
      {/* <Clock/> */}
      {/* <ChangeTitle/> */}
      {/* <Bar/> */}
      {/* <BarOtherFunctions/> */}
      <ProfileManager/>
    </div>
  );
}

export default App;
