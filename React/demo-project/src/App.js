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
import './css/App.css';

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
      <Pokedex/>
    </div>
  );
}

export default App;
