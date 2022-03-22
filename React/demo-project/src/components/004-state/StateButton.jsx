const StateButton = ({updateTotal}) => {
    return ( 
        // When the button is clicked it should run the updateTotal Function
        <button type="button" onClick={updateTotal}> Click me to increase the value! </button>
     );
}
 
export default StateButton;