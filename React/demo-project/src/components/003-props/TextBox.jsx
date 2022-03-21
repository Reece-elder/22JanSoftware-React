
// Our TextBox component takes in an object called props
// To access our text value we can do two things
const TextBox = (props) => {

    // const text = props.text;

    return ( 
        <p> The text is: {props.text} </p>
     );
}
 
export default TextBox;