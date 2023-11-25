import './App.css';
import { useState } from 'react';
import ProductForm from './Productform/Productform';
import ProductList from './ProductList/ProductList';

function App() {
  const [products, setProducts] = useState([]);

  let totalPrice = 0;
  products.forEach(product => {
    totalPrice += +product.price
  })

  const onProductAddHandler = (product) => {
    setProducts((pre) => [...pre,product])
  }

  const onProductRemoveHandler = (id) => {
    setProducts((pre) => pre.filter(el => +el.id !== +id))
  }

  return (
    <div className="App">
      <h1>Ecommerce Dashboard</h1>
      <ProductForm onProductAdd={onProductAddHandler}/>
      <ProductList products={products} removeProduct={onProductRemoveHandler}/>
      <p>Total Price: {totalPrice} Rs</p>
    </div>
  );
}

export default App;
