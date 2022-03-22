const SearchBar = ({basket, setBasket}) => {

    let searchQuery;

    const addToBasket = () => {
        const newBasket = [...basket];
        newBasket.push(searchQuery);
        setBasket(newBasket);
        console.log(basket);
    }

    return ( 
        <div>
            <input type="text" onChange = {(e) => {searchQuery = e.target.value}} placeholder="add to list"/>
            <button type="button" onClick={addToBasket}> Click me! </button>

        </div>
     );
}
 
export default SearchBar;