import Title from "./Title";
import TextBox from "./TextBox";

const Manager = () => {
  return (
    // When passing props from a parent component, pass them in as if its HTML
    // The name of the prop 'should' match the name of the prop it is replacing its value
    <div>
      <Title title="Value added as a prop" />
      <TextBox text="this is new text added as a prop value.." />
      <Title title="this is a new value"/>
      <Title title="this is a third new value"/>

    </div>
  );
};

export default Manager;
