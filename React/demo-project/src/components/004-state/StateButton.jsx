
// updateTotal = setTotal();
const StateButton = ({updateTotal, total}) => {

    // when the addTotal method runs it gets the value of total, and runs setTotal with total + 1
    const addTotal = () => {
        updateTotal(total + 1);
    }

    return ( 
        <>
         {/* When the button is clicked it should run the updateTotal Function */}
        <button type="button" onClick={addTotal}> Click me to increase the value! </button>

        {/* When the button is clicked it subtracts 1 from total */}
        <button type="button" onClick={() => {updateTotal(total - 1)}}> Click me to decrease the value! </button>
        </>

     );
}
 
export default StateButton;