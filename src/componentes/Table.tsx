import DataTable from 'react-data-table-component';
import {useContext} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";

export function Table() {
    const [customers,setCustomer] =useContext<Customer[]>(CustomerContext)
    const columns = [
        {
            name: "Name",
            selector: (row:Customer) => row.name,
        },
        {
            name: "Email",
            selector: (row:Customer) => row.email,
        },
        {
            name: "Phone",
            selector: (row:Customer) => row.phone,
        }
    ];
    return (
        <>
            <div className="container my-5">
                <DataTable columns={columns} data={customers} />
            </div>
        </>
    );
}