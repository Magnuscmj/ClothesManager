import { useState, useEffect } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { IProduct } from '../Interfaces/IProducts';
import { productService } from '../services/productService';
import '../App.css'

// useState
function Products() {
  const [products, setProducts] = useState<IProduct[]>([
    { id: 'loading..', name: 'Loading..', type: 'Loading..', image: 'loading' },
  ]);

  // useEffect 
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const result = await productService.getAllProducts();
    setProducts(result);
  };

  // bootstrap card-display
  const createProductList = () => {
    return products.map((product: IProduct, key: number) => {
      return (
        <>
          <Row xs={1} md={2} className='g-5'>
            {Array.from({ length: 3 }).map((_, idx) => (
              <Card key={key} style={{ width: '18rem' }}>
                <Card.Img
                  variant='top'
                  src={`https://localhost:5001/images/${product.image}`}
                />
                <Card.Body>
                  <Card.Title> {product.name} </Card.Title>
                  <Card.Text> {product.type} </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </>
      );
    });
  };

  // returns and shows createProductList
  return (
    <div className='Products'>
      <h1>Here we GET from DB</h1>
      <section>{createProductList()}</section>
    </div>
  );
}

export default Products;
