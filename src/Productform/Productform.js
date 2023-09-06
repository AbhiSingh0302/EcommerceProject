import { useState } from "react";

const ProductForm = (props) => {
    const [product, setProduct] = useState({
        id: "",
        name: "",
        price: ""
    })
    const onChangeProductID = (e) => {
        const newId = e.target.value;
        setProduct((pre) => {
            return {
                ...pre,
                id: newId
            }
        })
    }
    const onChangeProductName = (e) => {
        const newName = e.target.value;
        setProduct((pre) => {
            return {
                ...pre,
                name: newName
            }
        })
    }
    const onChangeProductPrice = (e) => {
        const newPrice = e.target.value;
        setProduct((pre) => {
            return {
                ...pre,
                price: newPrice
            }
        })
    }

    const addProduct = (e) => {
        e.preventDefault();
        console.log(product);
        localStorage.setItem(product.id,JSON.stringify(product));
        props.onProductAdd(JSON.stringify(product))
    }
    return (
        <form onSubmit={addProduct}>
            <input type="number" placeholder="ProductID" value={product.id} onChange={onChangeProductID}/>
            <input type="text" placeholder="Product Name" value={product.name} onChange={onChangeProductName}/>
            <input type="number" placeholder="Product Price" value={product.price} onChange={onChangeProductPrice}/>
            <button type="submt">Add Product</button>
        </form>
    )
}

export default ProductForm;