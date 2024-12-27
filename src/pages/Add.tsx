import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";
import {CustomerModal} from "../componentes/CustomerModal.tsx";
import {Item} from "../models/Item.ts";
import {ItemModal} from "../componentes/ItemModal.tsx";
import {ItemContext} from "../store/ItemProvider.tsx";

export function Add (){
    const navigate = useNavigate();
    // Add customer
    const [customers, dispatch] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function AddCustomer() {
        const newCustomer = new Customer(name, email, phone);
        dispatch({type:'ADD_CUSTOMER', payload:newCustomer});
        navigate('/');
    }
    // Add items
    const [items, setItems] = useContext(ItemContext);

    const [itemName, setItemName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");

    function AddItem() {
        const newItem = new Item(itemName,desc,price,qty)
        setItems((items: Item[]) => [...items, newItem]);
        navigate('/');
    }

    return (
        <div className="grid grid-cols-2">
            {/*right section*/}
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
                <header>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Add Item</h2>
                </header>
                <br/>

                <ItemModal
                    handleSubmit={AddItem}
                    setName={setItemName}
                    setDesc={setDesc}
                    setPrice={setPrice}
                    setQty={setQty}
                >
                    Add Item
                </ItemModal>
            </div>
        </div>
    )
}