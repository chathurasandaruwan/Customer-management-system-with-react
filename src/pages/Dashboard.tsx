import {useContext} from "react";
import {CustomerContext} from "../componentes/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";

export function Dashboard (){
    const [customers,setCustomer] =useContext(CustomerContext)
    return (
        <>Dashboard
            {customers.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone }</div>))}
        </>

    );
}