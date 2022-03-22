import ContactCard from "./ContactCard";

const ContactCardManager = () => {

    const contactArray = [
        {
            name: "Gregory",
            email: "greg123@hotmail.co.uk",
            age: 89,
            isCute : false,
            favFood: ["strawberry", "dandelion", "carrots"],
            image: "picture of a turtle"
        },
        {
            name: "Gregory2",
            email: "greg1234@hotmail.co.uk",
            age: 189,
            isCute : true,
            favFood: ["raspberry", "grass", "leeks"],
            image: "2nd picture of a turtle"
        }
    ]

    return ( 

        <>
            {contactArray.map((animal, key) => {
                return <ContactCard name={animal.name} email={animal.email} age={animal.age} isCute={animal.isCute} favFood={animal.favFood} image={animal.image}/>
            })}
        </>
        

     );
}
 
export default ContactCardManager;