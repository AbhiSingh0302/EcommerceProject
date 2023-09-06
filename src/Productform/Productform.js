const ProductForm = () => {
    return (
        <form>
            <input type="number" placeholder="ProductID"/>
            <input type="text" placeholder="Product Name"/>
            <input type="number" placeholder="Product Price"/>
            <button type="submt">Add Product</button>
        </form>
    )
}

export default ProductForm;