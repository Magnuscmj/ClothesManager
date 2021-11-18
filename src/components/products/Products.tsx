import { useState, useEffect } from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { IProduct } from '../../Interfaces/IProducts';
import { productService } from '../../services/productService';
import '../../App.css';

// useState
function Products() {
  const [products, setProducts] = useState<IProduct[]>([
    { id: 'loading..', name: 'Loading..', type: 'Loading..', image: '' },
  ]);

  // useEffect
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const result = await productService.getAllProducts();
    setProducts(result);
  };

  const deleteProductByID = async (id?: string) => {
    await productService.deleteProduct(id);
    getProducts()
  }

  const updateProduct = async (id: string, data: IProduct) => {
    await productService.updateProduct(id, data);
  }

  // bootstrap card-display
  const createProductList = () => {
    return products.map((product: IProduct, key: number) => {
      console.log(product.id);
      
      return (
        <Col key={key}>
        <div className='card-container'>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src={`https://localhost:5001/images/${product.image}`}
            />
            <Card.Body>
              <Card.Title> {product.name} </Card.Title>
              <Card.Text> {product.type} </Card.Text>
              <Button variant='primary'>Edit</Button>
              <Button variant='danger' onClick={() => deleteProductByID(product.id)}>Delete</Button>
            </Card.Body>
          </Card>
        </div>
        </Col>
      );
    });
  };

  // returns and shows createProductList
  return (
      <Container>
        <h1>Here we GET from DB</h1>
        <Row>{createProductList()}</Row>
      </Container>
  );
}

export default Products;
