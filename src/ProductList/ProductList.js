import './ProductList.css';

const ProductList = (props) => {
    const removeHandler = (e) => {
        localStorage.removeItem(e.target.id);
        e.target.parentElement.remove();
    }

    return (
        <ul className='productUl'>
            {props.products.map((ele) => (
                <li key={JSON.parse(ele).id}>{JSON.parse(ele).id} {JSON.parse(ele).name} {JSON.parse(ele).price}   <span className="remove" id={JSON.parse(ele).id} onClick={removeHandler}>X</span></li>
            ))}
        </ul>
    )
}

export default ProductList