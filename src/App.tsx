import React, { useState, useEffect } from 'react';
import './App.css';
import { IProduct } from './Interfaces/IProducts';
import { productService } from './services/productService';


function App() {

  const [ products, setProducts ] = useState<IProduct[]>(
    [
      { id: "loading..", name: "Loading..", type: "Loading.."}
    ]
    );

    useEffect( () => {
      getProduct();
    }, [])


    const getProduct = async () => {
      const result = await productService.getAllProducts();
      setProducts( result );
    }


  const createProductList = () => {
    return products.map( ( product: IProduct, key: number ) => {
      return(
        <article key={key}>
          <h3>{ product.id } { product.name } { product.type } </h3>
        </article>
      )
    } );
  }


  return (
    <div className="App">
        <h1>Clothes Store</h1>
        <section>{createProductList()}</section>
    </div>
  );
}

export default App;
