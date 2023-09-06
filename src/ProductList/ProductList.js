import './ProductList.css';

const ProductList = (props) => {
    const removeHandler = (e) => {
        localStorage.removeItem(e.target.id);
        props.removeProduct(e.target.id);
        e.target.parentElement.remove();
    }

    return (
        <ul className='productUl'>
            {props.products.map((ele) => (
                <li key={JSON.parse(ele).id}>Product ID: {JSON.parse(ele).id}, Product Name: {JSON.parse(ele).name}, Product Price: {JSON.parse(ele).price} Rs  <span className="remove" id={JSON.parse(ele).id} onClick={removeHandler}>X</span></li>
            ))}
        </ul>
    )
}

export default ProductList