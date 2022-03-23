import { useState } from "react";
import Basket from "./Basket.jsx";

const ShopManager = () => {
  // Shop Manager will have state for the array of items in the basket - Will contain an array of objects
  const [data, setData] = useState([]);

  // State for the order object we are creating
  const [order, setOrder] = useState({});
//   const [quantity, setQuantity] = useState(0); 

  const addToBasket = (o) => {
    setData((currentData) => {
      return [...currentData, o]; // Adding our passed in order item to the array
    });
    setOrder({}); // Setting order state to be null again
  };

  // Our method to set our order object
  const setOrderObj = (event) => {
      const {name, value} = event.target;
      setOrder((currentObj) => ({
          ...currentObj, [name] : value,
      }));
  };

  return (
    <>
        <h1> Welcome to the shop! </h1>
        <input type="text" name="item" onChange={setOrderObj} value={order.item} placeholder="Enter item name"/>
        <input type="number" name="quantity" onChange={setOrderObj} value={order.quantity} placeholder="Enter item quantity"/>
        <button type="button" onClick={() => {addToBasket(order)}}> Add to basket! </button>
        <Basket data={data} />
    </>
  );
};

export default ShopManager;
