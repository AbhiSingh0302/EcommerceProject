import './ProductList.css';

const ProductList = (props) => {
    const removeHandler = (e) => {
        // localStorage.removeItem(e.target.id);
        console.log(e.target.id);
        props.removeProduct(e.target.id);
    }

    return (
        <ul className='productUl'>
            {props.products.map((ele) => (
                <li key={ele.id}>Product ID: {ele.prodId}, Product Name: {ele.name}, Product Price: {ele.price} Rs  <span className="remove" id={ele.id} onClick={removeHandler}>X</span></li>
            ))}
        </ul>
    )
}

export default ProductList