import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Table} from "../componentes/Table.tsx";
import {Modal} from "../componentes/Modal.tsx";

export function UpdateCustomer (){
    const [customers , setCustomer] = useContext(CustomerContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    function updateCustomerByEmail() {
        const updateCustomer = customers.map((customer)=>(
            customer.email==email ? {...customer,name : name, phone : phone} : customer
        ))
        setCustomer(updateCustomer);
    }

    return (
        <div>
            <header>
                <h2>Update Customer</h2>
            </header>
            <br />

            <Modal
                handleSubmit={updateCustomerByEmail}
                setName={setName}
                setEmail={setEmail}
                setPhone={setPhone}
            >
                Update Customer
            </Modal>
            <br/>
            <br/>
            <Table/>
        </div>
    )
    /*return (
        <>
            <input className={"textInput"} name="firstName" type="text" placeholder="Name" onChange={e =>setName(e.target.value)}/>
            <input className={"textInput"} name="lastName" type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
            <input className={"textInput"} name="lastName" type="tel" placeholder="Phone" onChange={e=>setPhone(e.target.value)}/>
            <br/>
            <br/>
            <br/>
            <button onClick={updateCustomerByEmail} type="button">Update</button>
            <br/>
            <br/>
            {/!*{customers.map((customer) =>(
                <div key={customer.email}>{customer.name+'  '+customer.email+'  '+customer.phone}</div>
            ))}*!/}
            <Table/>
        </>
    )*/
}