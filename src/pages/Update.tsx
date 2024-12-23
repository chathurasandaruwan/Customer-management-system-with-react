import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Table} from "../componentes/Table.tsx";
import {CustomerModal} from "../componentes/CustomerModal.tsx";
import {useNavigate} from "react-router";
import {ItemContext} from "../store/ItemProvider.tsx";
import {ItemModal} from "../componentes/ItemModal.tsx";

export function Update (){
    const navigate = useNavigate();
    const [customers , setCustomer] = useContext(CustomerContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    function updateCustomerByEmail() {
        const updateCustomer = customers.map((customer)=>(
            customer.email==email ? {...customer,name : name, phone : phone} : customer
        ))
        setCustomer(updateCustomer);
        navigate('/');
    }
    // Add items
    const [items, setItems] = useContext(ItemContext);

    const [itemName, setItemName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");

    function updateItem() {
        const updateItem = items.map((item)=>(
            item.name==itemName ? {...item,desc : desc, price : price, qty : qty} : item
        ))
        setItems(updateItem);
        navigate('/');
    }


    return (
        <div className="grid grid-cols-2">
            {/*right section*/}
            <div className="bg-white shadow-md rounded-lg p-6 m-4 ">
                <header>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Update Customer</h2>
                </header>
                <br/>

                <CustomerModal
                    handleSubmit={updateCustomerByEmail}
                    setName={setName}
                    setEmail={setEmail}
                    setPhone={setPhone}
                >
                    Update Customer
                </CustomerModal>
            </div>
            {/*left section*/}
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <header>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Update Item</h2>
                </header>
                <br/>

                <ItemModal
                    handleSubmit={updateItem}
                    setName={setItemName}
                    setDesc={setDesc}
                    setPrice={setPrice}
                    setQty={setQty}
                >
                    Update Item
                </ItemModal>
            </div>
        </div>
    )
}