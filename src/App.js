import './App.css';
import { useState } from 'react';
import ProductForm from './Productform/Productform';
import ProductList from './ProductList/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const onProductAddHandler = (product) => {
    setProducts((pre) => {
      return [...pre,product];
    })

    setTotalPrice((pre) => {
      return Number(pre)+Number(JSON.parse(product).price);
    })
  }

  const onProductRemoveHandler = (id) => {
    const item = products.find(el => JSON.parse(el).id === id);
    console.log(JSON.parse(item).price);
    setTotalPrice((pre) => {
      return Number(pre)-Number(JSON.parse(item).price);
    })

    setProducts((pre) => {
      return pre.filter(el => JSON.parse(el).id === id)
    })
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
