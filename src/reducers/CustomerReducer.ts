import {Customer} from "../models/Customer.ts";

export const initialState :  Customer[] = [];
export function CustomerReducer(state:Customer [], action:{type:string, payload:Customer}) {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            console.log('Add customer');
            return
        case 'UPDATE_CUSTOMER':
            console.log('UPDATE CUSTOMER');
            return;
        case 'DELETE_CUSTOMER':
            console.log('DELETE CUSTOMER');
            return;
        default:
            console.log('something wrong please try again!!')
            return;

    }
}