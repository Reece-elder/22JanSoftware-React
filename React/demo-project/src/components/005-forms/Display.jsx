// Passing in username and password as props
const Display = ({username, password}) => {

    // 1) Pass and user correct
    // 2) pass and user incorrect
    // 3) Nothing entered
    // 4) Button submitted but no data 

    // double equals - checks just for value 1 == "1"
    // tripel equals - checks for value AND data type 1 === 1
    if(username === "test1" && password === "pass1"){
        return <h2> Succesfully logged in! </h2>
    } else if(username === "" && password === "") {
        return <h2> Please enter username and password </h2>
    } else if (username === "") {
        return <h2> Please enter username </h2>
    } else if (password === "") {
        return <h2> Please enter password </h2>
    } else {
        return <h2> Check username and password!! </h2>
    }
};

export default Display;
