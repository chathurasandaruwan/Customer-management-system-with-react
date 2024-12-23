import DataTable from 'react-data-table-component';
import {useContext} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";

export function Table() {
    const [customers, setCustomers] = useContext(CustomerContext);
  /*  const columns = [
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
    );*/
    return (
        <>
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>phone</td>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer: Customer) => (
                    <tr key={customer.email}>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        {/* {customer.name + " " + customer.email + " " + customer.phone} */}
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}