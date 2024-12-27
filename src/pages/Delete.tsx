import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {CustomerModal} from "../componentes/CustomerModal.tsx";
import {ItemModal} from "../componentes/ItemModal.tsx";
import {ItemContext} from "../store/ItemProvider.tsx";
import {useNavigate} from "react-router";
import {Customer} from "../models/Customer.ts";
import {Item} from "../models/Item.ts";

export function Delete (){
    const navigate = useNavigate();
    const [customers , dispatch] = useContext(CustomerContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    function deleteCustomerByEmail() {
        /*setCustomer((customers) =>customers.filter((customers) =>customers.email != email));*/
        dispatch({type:'DELETE_CUSTOMER', payload:new Customer(name,email,phone)});
        navigate('/');
    }
    // delete items
    const [items, dispatche] = useContext(ItemContext);

    const [itemName, setItemName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");

    function deleteItem() {
        dispatche({type:'DELETE_ITEM', payload:new Item(itemName,desc,price,qty)});
        navigate('/');
    }
    return (
        <div className="grid grid-cols-2">
            {/*right section*/}
            <div className="bg-white shadow-md rounded-lg p-6 m-4 ">
                <header>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Delete Customer</h2>
                </header>
                <br/>

                <CustomerModal
                    handleSubmit={deleteCustomerByEmail}
                    setName={setName}
                    setEmail={setEmail}
                    setPhone={setPhone}
                >
                    Delete Customer
                </CustomerModal>
            </div>
            {/*left section*/}
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <header>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Delete Item</h2>
                </header>
                <br/>

                <ItemModal
                    handleSubmit={deleteItem}
                    setName={setItemName}
                    setDesc={setDesc}
                    setPrice={setPrice}
                    setQty={setQty}
                >
                    Delete Item
                </ItemModal>
            </div>
        </div>
    );
}