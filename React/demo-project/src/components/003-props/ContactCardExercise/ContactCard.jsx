const ContactCard = ({name, email, age, isCute, favFood, image}) => {
    return ( 
        <div>
            <h2> Name: {name}</h2>
            <h3> Email: {email}</h3>
            <h3> Age: {age} </h3>
            <h3> Cute: {isCute.toString()} </h3>
            {/* Works if you know EXACTLY how many items in the array */}
            <ul> 
                <li> Food 1: {favFood[0]}</li>
                <li> Food 2: {favFood[1]}</li>
                <li> Food 3: {favFood[2]}</li>
            </ul>

            {/* Works when you dont know how many items are in the array */}
            <ul>
            {/* When using .map key is the index number, so it is a numerical identifier number */}
            {favFood.map((food, key) => {
                return <li> Food {key + 1}: {food} </li>
            })}
            </ul>
            <img src={image} alt="picture of {name}"/>
        </div>

     );
}
 
export default ContactCard;