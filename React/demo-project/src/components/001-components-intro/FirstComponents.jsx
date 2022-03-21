// React components are created as jsx files rather than js 
// jsx allows you to combine HTML and JS seamlessly 

// All of the components should start with a capital letter

// const <Component name> is an arrow function which returns our code
const FirstComponent = () => {

    const name = "new name";
    const favPizza = "Hawiaan"; 

    // Within a Component the only thing that this renders is what it returns
    // A component can only ever return one HTML element
    // Surrounding your elements in a <div> means its only one element 
    // The other solution is <> react fragment, div hell 
    return(
        <>
            <h1> Changing this component </h1>
            <h3> New sub header </h3>
            {/* By using {} we are seamlessly adding our JS to our HTML return */}
            <h2> My name is {name} </h2>
            <h3> My fav pizza is {favPizza} </h3>
        </>
    )

}

// Export our component as a module, similar to within node 
export default FirstComponent;