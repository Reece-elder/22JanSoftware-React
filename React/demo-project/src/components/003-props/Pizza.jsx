// Creating a component that takes in Type (String), size (number) and stuffedCrust (boolean)
// Pizza takes in an object called props
const Pizza = (props) => {

  // Destructuring our props object into the individual values
  const {type, size, stuffedCrust} = props;

  // This function is ONLY called when the child component calls
//   funcProp("passed as a prop!");

  return (
    <div>
      <h2> Pizza of type: {type}</h2>
      <h3> Pizza size: {size}</h3>
      {/* toString() will convert boolean to the string true or false */}
      <h3> Pizza stuffedCrust: {stuffedCrust.toString()} </h3> 
    </div>
  );
};

export default Pizza;
