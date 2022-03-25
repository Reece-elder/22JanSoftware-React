
// Our title component takes in a prop called 'title' 
// the prop is surrounded by {} - destructuring the object 'Props' 
const Title = ({title}) => {
    return ( 
        <h2> The title is: {title} </h2>
     );
}
 
export default Title;