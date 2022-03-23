const Pokemon = ({data}) => {

    const id = "" + data.id;

    const pad = "000"
    const result = pad.substring(0, pad.length - id.length) + id + ".png";

    const path = "./images/" + result;
    console.log(path);


    return ( 
        <>
            <h2> Pokemon name: {data.name.english} </h2>
            <h3> Special Attack: {data.base["Sp. Attack"]}</h3>
            <h3> Attack: {data.base.Attack} </h3>
            <img src={"001.png"}/>
            <img src={path} alt={data.name.english}/>
        </>

     );
}
 
export default Pokemon;