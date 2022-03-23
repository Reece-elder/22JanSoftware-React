// Grab the JSON file, import in as a variable called PokedexData
import PokedexData from './Pokedex.json';

import Pokemon from './Pokemon';

console.log(PokedexData[1]); // console.log out the data for the first index

const Pokedex = () => {
    return ( 
        <div>
            {PokedexData.map((pokemon, key) => {
               return <Pokemon data={pokemon}/>
            })}
        </div>
     );
}
 
export default Pokedex;