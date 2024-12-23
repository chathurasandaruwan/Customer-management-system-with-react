import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";
import {CustomerModal} from "../componentes/CustomerModal.tsx";
import "../index.css"

export function Add (){
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function AddCustomer() {
        const newCustomer = new Customer(name, email, phone);
        setCustomers((customers: Customer[]) => [...customers, newCustomer]);
        navigate('/');
    }
    return (
        <div className="grid grid-cols-2">
            {/*write section*/}
            <div className="bg-white shadow-md rounded-lg p-6 m-4 ">
                <header>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Add Customer</h2>
                </header>
                <br/>

                <CustomerModal
                    handleSubmit={AddCustomer}
                    setName={setName}
                    setEmail={setEmail}
                    setPhone={setPhone}
                >
                    Add Customer
                </CustomerModal>
            </div>
            {/*left section*/}
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-gray-500 mb-6">Add Item</h1>
            </div>
        </div>
    )
}