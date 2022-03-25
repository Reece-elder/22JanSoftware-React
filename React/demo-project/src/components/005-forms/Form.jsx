const Form = ({loginFunc}) => {

    let tempUser;
    let tempPass;

    return ( 
        <form>
            <input type="text" placeholder="enter username" value={tempUser} onChange={(e) => tempUser = e.target.value}/>
            <input type="password" placeholder="enter password" value={tempPass} onChange={(e) => tempPass = e.target.value}/>
            <button type="button" onClick={() => {loginFunc(tempUser, tempPass)}}> Click me to submit data </button>
        </form>
     );
}
 
export default Form;