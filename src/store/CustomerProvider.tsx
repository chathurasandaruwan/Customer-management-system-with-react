import {createContext, useReducer, useState} from "react";
import {Customer} from "../models/Customer.ts";
import {CustomerReducer, initialState} from "../reducers/CustomerReducer.ts";

export const CustomerContext  = createContext();
export function CustomerProvider({children}) {

    // const [customers, setCustomers] = useState<Customer[]>([]);
    const [customers, dispatch] = useReducer(CustomerReducer, initialState);

    return (
        <>
            <CustomerContext.Provider value={[customers, dispatch]}>
                {children}
            </CustomerContext.Provider>
        </>
    );
}