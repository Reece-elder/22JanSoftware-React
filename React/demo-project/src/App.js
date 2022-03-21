import FirstComponent from './components/001-components-intro/FirstComponents';
import './css/App.css';

// Within React, the data that is rendered is what each component (app.js) returns

function App() {
  // Everything between the return() is considred html 
  // If you want to add JS to your html it must be contained within {}

  return (
    <div className="App">
      {/* Our app is rendering whatever FirstComponent renders */}
      <FirstComponent/> 
    </div>
  );
}

export default App;
