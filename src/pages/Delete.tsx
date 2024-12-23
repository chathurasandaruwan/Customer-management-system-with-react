import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Table} from "../componentes/Table.tsx";
import {CustomerModal} from "../componentes/CustomerModal.tsx";

export function Delete (){
    const [customers , setCustomer] = useContext(CustomerContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    function deleteCustomerByEmail() {
        setCustomer((customers) =>customers.filter((customers) =>customers.email != email));

    }
    return (
        <div className="bg-white shadow-md rounded-lg p-6 m-4">
            <header>
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Delete Customer</h2>
            </header>
            <br />

            <CustomerModal
                handleSubmit={deleteCustomerByEmail}
                setName={setName}
                setEmail={setEmail}
                setPhone={setPhone}
            >
                Delete Customer
            </CustomerModal>
            <br/>
            <br/>
            <Table/>
        </div>
    );
}