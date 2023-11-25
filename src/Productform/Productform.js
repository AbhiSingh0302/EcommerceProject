import { useRef } from "react";

const ProductForm = (props) => {
    
    const idRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();

    const addProduct = (e) => {
        e.preventDefault();
        // localStorage.setItem(product.id,JSON.stringify(product));
        props.onProductAdd({id: idRef.current.value*Math.random(), prodId: idRef.current.value, name: nameRef.current.value, price: priceRef.current.value})
    }

    return (
        <form onSubmit={addProduct}>
            <input type="number" placeholder="ProductID" ref={idRef}/>
            <input type="text" placeholder="Product Name" ref={nameRef} />
            <input type="number" placeholder="Product Price" ref={priceRef}/>
            <button type="submt">Add Product</button>
        </form>
    )
}

export default ProductForm;