const Pokemon = ({data}) => {

    return ( 
        <>
            <h2> Pokemon name: {data.name.english} </h2>
            <h3> Special Attack: {data.base["Sp. Attack"]}</h3>
            <h3> Attack: {data.base.Attack} </h3>
        </>

     );
}
 
export default Pokemon;