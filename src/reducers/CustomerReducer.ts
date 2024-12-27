import {Customer} from "../models/Customer.ts";

export const initialState :  Customer[] = [];
export function CustomerReducer(state:Customer [], action:{type:string, payload:Customer}) {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return [...state,action.payload];
        case 'UPDATE_CUSTOMER':
            return state.map((customer)=>(
                customer.email==action.payload.email ? {...customer,name : action.payload.name, phone : action.payload.phone} : customer
            ))
        case 'DELETE_CUSTOMER':
            return state.filter((customer)=> customer.email != action.payload.email)
        default:
            console.log('something wrong please try again!!')
            return;

    }
}