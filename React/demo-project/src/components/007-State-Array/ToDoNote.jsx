// Destructuring the data value out of the props object
const ToDoNote = ({ data }) => {
  // No data in the array
  if (data.length === 0) {
    return <h2> Please enter a todo! </h2>;

  } else {
    // If there is atleast 1 element in the array, do this
    // For every note in the data array return this thing

    // (JS)
    return ( 
        // Returning a HTML Div
      <div>

      {/* Within the div we need to add our {} to break from HTML -> JS */}
        {data.map((note, key) => {
          return <h2> Note: {note} </h2>; // Is returning a series of <h2> 
        })}
      </div>
    );
  }
};

export default ToDoNote;
