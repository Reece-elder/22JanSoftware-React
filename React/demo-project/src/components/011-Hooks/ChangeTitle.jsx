import { useEffect, useState } from "react";

const ChangeTitle = () => {

    // State for the input field
    const[title, setTitle] = useState("");

    // Use effect that is triggered when our state changes
    useEffect(() => {
        document.title = title; // sets the document title to be our variable 'title'
    },[title]);                 // runs every time the state title is changed

    return ( <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/> );
}
 
export default ChangeTitle;