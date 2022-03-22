const Basket = ({basket}) => {
    
    console.log(basket);

    if(basket.length === 0){
        return <h2> Nothing added to basket :( </h2>
    } else {
        basket.map((item, key) => {
            return <h2> Item: {item}</h2>
        });
    }
}
 
export default Basket;