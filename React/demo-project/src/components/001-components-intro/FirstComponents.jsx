// React components are created as jsx files rather than js 
// jsx allows you to combine HTML and JS seamlessly 

// All of the components should start with a capital letter

// const <Component name> is an arrow function which returns our code
const FirstComponent = () => {

    const name = "new name";
    const favPizza = "Hawiaan"; 
    const favColour = "Purple";
    const favNumber = 36

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
            <h2 > My fav colour is: {favColour} </h2>
            <h2> Favour number is {favNumber} </h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Phelsuma_l._laticauda.jpg" alt="description" width="300px"/> 
            <ol> 
                <li> Kiwi </li>
                <li> Banana </li>
                <li> Mango </li>
            </ol>
        </>
    )

}

// Export our component as a module, similar to within node 
export default FirstComponent;