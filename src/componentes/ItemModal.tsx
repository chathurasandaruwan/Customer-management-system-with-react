export function ItemModal(props, children) {
    return (
        <>
            <input type="text" placeholder='name' onChange={(e) => props.setName(e.target.value)}/>
            <input type="text" placeholder='description' onChange={(e) => props.setDesc(e.target.value)}/>
            <input type="number" placeholder='price' onChange={(e) => props.setPrice(e.target.value)}/>
            <input type="number" placeholder='qty' onChange={(e) => props.setQty(e.target.value)}/>

            <br/>
            <br/>
            <button onClick={props.handleSubmit}>{props.children}</button>
        </>
    );
}