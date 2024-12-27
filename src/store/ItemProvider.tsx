import {createContext, useReducer} from "react";
// import {Item} from "../models/Item.ts";
import {initialState, ItemReducer} from "../reducers/ItemReducer.ts";

export const ItemContext  = createContext();
export function ItemProvider({children}) {

    // const [items, setItems] = useState<Item[]>([]);
    const [items, dispatch] = useReducer(ItemReducer,initialState);

    return (
        <>
            <ItemContext.Provider value={[items, dispatch]}>
                {children}
            </ItemContext.Provider>
        </>
    );
}