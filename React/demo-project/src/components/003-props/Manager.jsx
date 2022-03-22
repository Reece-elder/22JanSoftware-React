import Title from "./Title";
import TextBox from "./TextBox";
import Pizza from "./Pizza";
import PizzaOven from "./PizzaOven";

// With props you can pass any data to them: Strings, numbers, booleans
// Functions, objects, arrays

// When this function is called, it will send a popup containing the passed in text
const alertFunc = (text) => {
    alert(text);
}

// Create an array of objects to pass in
// [] - denotes an array
// {} - denotes an object
const pizzaArray = [
    {
        type: "Pepperoni",
        size: 12,
        stuffedCrust: true
    },
    {
        type: "Hawiaan",
        size: 11,
        stuffedCrust: false
    },
    {
        type: "Four Cheese",
        size: 13,
        stuffedCrust: true
    }
]

const Manager = () => {
  return (
    // When passing props from a parent component, pass them in as if its HTML
    // The name of the prop 'should' match the name of the prop it is replacing its value
    <div>
      <Title title="Value added as a prop" />
      <TextBox text="this is new text added as a prop value.." />
      <Title title="this is a new value"/>
      <Title title="this is a third new value"/>

        {/* If you're not passing in text (String) surround the value in {} converts to JS */}
      <Pizza type="Pepperoni" size={12} stuffedCrust={true} funcProp={alertFunc}/>
      {/* <br> line break, adds space between elements */}
      <br></br> 
      <br></br>

      <PizzaOven data={pizzaArray}/>
      {/* Passing in our pizza array to our oven */}
    </div>
  );
};

export default Manager;
