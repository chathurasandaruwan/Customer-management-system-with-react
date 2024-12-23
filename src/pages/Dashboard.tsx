import {useContext} from "react";
import {Table} from "../componentes/Table.tsx";
import {ItemContext} from "../store/ItemProvider.tsx";
import {Item} from "../models/Item.ts";

export function Dashboard() {
    const [items, setItems] = useContext(ItemContext);
    return (
        <div className="p-6 h-lvh bg-amber-100">
            <h1 className="text-3xl font-bold text-gray-700 mb-6">Dashboard</h1>

            {/* main section */}
            <div className="grid grid-cols-2">
                {/* left section */}
                <div className="m-3">
                    <h1 className="text-2xl font-bold text-gray-500 mb-6">Cutomers</h1>
                    <Table/>
                </div>

                {/* right section */}
                <div className="m-3">
                    <h1 className="text-2xl font-bold text-gray-500 mb-6">Item</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
                        {items.map((item: Item) => (
                            <div
                                id={item.name}
                                className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                            >
                                <h2 className="text-lg font-semibold text-blue-600">
                                    {item.name}
                                </h2>
                                <p className="text-gray-600">{item.desc}</p>
                                <p className="text-gray-600">{item.price}</p>
                                <p className="text-gray-600">{item.qty}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}