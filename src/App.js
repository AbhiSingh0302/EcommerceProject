import './App.css';
import { useState } from 'react';
import ProductForm from './Productform/Productform';
import ProductList from './ProductList/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const onProductAddHandler = (product) => {
    setProducts((pre) => {
      return [...pre,product];
    })
  }
  return (
    <div className="App">
      <h1>Ecommerce Dashboard</h1>
      <ProductForm onProductAdd={onProductAddHandler}/>
      <ProductList products={products}/>
    </div>
  );
}

export default App;
