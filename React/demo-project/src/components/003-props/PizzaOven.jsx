// PizzaOven will exist as a component between manager and pizza
// Manager sends props to PizzaOven, PizzaOven will render pizzas passing in props

import Pizza from "./Pizza";

// PizzaOven will take in an array of data, and will render a component for each bit of data

const PizzaOven = ({ data }) => {
  //   data.forEach((pizza, i) => {
  //     console.log(pizza.type);
  //     console.log(pizza.size);
  //     console.log(pizza.stuffedCrust);
  //     // return <Pizza type={pizza.type} size={pizza.size} stuffedCrust={pizza.stuffedCrust}/>
  //   });

  // Render a Pizza for every object in the array
  // Looping through our array and generating a new Pizza

  // In order to return the result of a loop, we use {}
  return (
    <>
      <h2> Pizza Oven</h2>

      {/* In order for a map to work, you must surround it in <> </> or <div> </div> */}
      {/* Otherwise you are trying to return multiple elements, rather than one element containing multiple elements */}
      {data.map((pizza) => {
        return (
          <>
            <Pizza type={pizza.type} size={pizza.size} stuffedCrust={pizza.stuffedCrust} />
          </>
        );
      })}
    </>
  );
};

export default PizzaOven;
