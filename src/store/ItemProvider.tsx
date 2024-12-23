import {createContext, useState} from "react";
import {Item} from "../models/Item.ts";

export const ItemContext  = createContext();
export function CustomerProvider({children}) {

    const [items, setItems] = useState<Item[]>([]);

    return (
        <>
            <ItemContext.Provider value={[items, setItems]}>
                {children}
            </ItemContext.Provider>
        </>
    );
}