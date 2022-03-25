import { useState } from "react";
import axios from 'axios';

const ProfileManager = () => {

    // State for the data we're loading in 
    const[data, setData] = useState([]);

    // State for the URL request we're making
    const[query, setQuery] = useState("");

    // State for the ID we're deleting / updating
    const[id, setId] = useState(0);

    // State for the data we're posting
    const[profile, setProfile] = useState({});

    const getData = () => {

        // Using axios to getData
        // query is the "/path" we want to use for that specific query
        axios.get(`https://reqres.in/api/${query}`)
        .then((response) => {  // Whatever our get request responds with, chuck in this arrow function
            console.log(response); // So we can see what the data looks like
            console.log(response.data.data);
            if(Array.isArray(response.data.data)){  // If the response is of type array
                console.log("type of running");
                setData(response.data.data)
            } else {
                setData([response.data.data]); // put my response into an array
            }
        }) 
    }

    const deleteData = () => {
        axios.delete(`https://reqres.in/api/users/${id}`)
        .then(() => {
            console.log("Profile Deleted");
        });
    }

    const setObject = (event) => {
        const {name, value} = event.target;
        setProfile((prevValue) => ({
            ...prevValue, [name]: value,
        }));
    };

    const postData = () => {
        axios.post(`https://reqres.in/api/users/`, profile) // Comma after the url and pass in the data you're adding
        .then((response) => {
            console.log(response);
        })
    }

    return ( 
        <>
        {/* Get All or get by id */}
            <input type="text" value={query} onChange={(e) => {setQuery(e.target.value)}}/>
            <button type="button" onClick={() => {getData()}}> Click me to see data! </button>
            <br></br>
            {/* Delete by id */}
            <input type="number" value={id} onChange={(e) => setId(e.target.value)}/>
            <button type="button" onClick={() => {deleteData()}}> Delete By ID </button>
            <br></br>

            {/* Posting Data */}
            <input type="text" value={profile.name} name="name" onChange={setObject} placeholder="Enter name"/>
            <input type="text" value={profile.job} name="job" onChange={setObject} placeholder="Enter job"/>
            <button type="button" onClick={postData}> Click me to post Data </button>
            {/* Returning Data */}
            {
                data.map((profile, key) => {
                    return <h2> Name: {profile.first_name}</h2>
                })
            }
        </> 
    );
}
 
export default ProfileManager;