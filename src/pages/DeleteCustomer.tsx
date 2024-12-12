import {useContext, useState} from "react";
import {CustomerContext} from "../componentes/CustomerProvider.tsx";

export function DeleteCustomer (){
    const [customers , setCustomer] = useContext(CustomerContext)

    // const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    // const [phone, setPhone] = useState("")

    function deleteCustomerByEmail() {
        setCustomer((customers) =>customers.filter((customers) =>customers.email != email));

    }
    return (
        <>
            {/*<input className={"textInput"} name="firstName" type="text" placeholder="Name" onChange={e =>setName(e.target.value)}/>*/}
            <input className={"textInput"} name="lastName" type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
            {/*<input className={"textInput"} name="lastName" type="tel" placeholder="Phone" onChange={e=>setPhone(e.target.value)}/>*/}
            <br/>
            <br/>
            <br/>
            <button onClick={deleteCustomerByEmail} type="button">Delete</button>
            <br/>
            <br/>
            {customers.map((customer) =>(
                <div key={customer.email}>{customer.name+'  '+customer.email+'  '+customer.phone}</div>
            ))}
        </>
    );
}