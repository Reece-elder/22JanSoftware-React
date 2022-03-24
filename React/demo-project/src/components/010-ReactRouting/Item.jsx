// Our item page should be a specific page based on the ID of an item you're ordering 
// When accessing /item/123 - show data specific to that item (Amazon)

import {useParams} from 'react-router-dom';

const Item = () => {

    // useParams() checks the url and pulls the paramaters from it (item/123)
    const {itemId} = useParams(); // Save this paramater value as a variable called itemId

    return ( 
        <>
            <h3> Item Page </h3>
            <h4> Item page for id: {itemId}</h4>
        </>
     );
}
 
export default Item;