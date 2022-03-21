import Button from "./Button";
import EmailForm from "./EmailForm";
import FormMessage from "./FormMessage";
import NameForm from "./NameForm";

const FormBody = () => {
    return ( 
        <>
        <NameForm/>
        <EmailForm/>
        <FormMessage/>
        <Button/>
        </>
     );
}
 
export default FormBody;