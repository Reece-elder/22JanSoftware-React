import { useState } from "react";
import SearchBar from "./SearchBar";
import Basket from "./Basket";

const FormManager = () => {

    const [basket, setBasket] = useState([]);

    return (
        <>
            <Basket basket={basket}/>
            <SearchBar basket={basket} setBasket={setBasket}/>
        </> 


     );
}
 
export default FormManager;