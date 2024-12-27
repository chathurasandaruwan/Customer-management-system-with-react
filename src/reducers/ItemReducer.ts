import {Item} from "../models/Item.ts";


export const initialState :  Item[] = [];
export function ItemReducer(state:Item [], action:{type:string, payload:Item}) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state,action.payload];
        case 'UPDATE_ITEM':
            return state.map((item)=>(
                item.name==action.payload.name ? {...item,desc : action.payload.desc, price : action.payload.price, qty : action.payload.qty} : item
            ))
        case 'DELETE_ITEM':
            return state.filter((items)=> items.name != action.payload.name)
        default:
            console.log('something wrong please try again!!')
            return;

    }
}