const Beer = ({data}) => {
    return ( 
        <>
            <h2> Beer name: {data.name} </h2>
            <img src={data.image_url} alt={data.name} width="70px"/>
            <p> Alcohol content is: {data.abv}</p>
            <p> Food pairings with this are: </p>
            {data.food_pairing.map((food, key) => {
                return <li> {food} </li>
            })}
        </>
     );
}
 
export default Beer;