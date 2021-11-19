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

  const updateProduct = async (data: IProduct, id?: string) => {
    await productService.updateProduct(data, id);
  };

  // bootstrap card-display
  const createProductList = () => {
    return products.map((product: IProduct, key: number) => {
      const dummyObject: IProduct = {
        id: product.id,
        name: 'putasdasfsasfd',
        type: 'put',
        image: ''
      }
      return (
        <Col key={key}>
          <div className='card-container'>
            <Card className='Cards' style={{ width: '18rem', }}>
              <Card.Img
                style={{ maxWidth: '350px', minHeight: '200px' }}
                variant='top'
                src={`https://localhost:5001/images/${product.image}`}
              />
              <Card.Body>
                <Card.Title> {product.name} </Card.Title>
                <Card.Text> {product.type} </Card.Text>
                <Button
                  variant='primary'
                  style={{ marginRight: '10px', minWidth: '100px' }}
                  onClick={() => updateProduct(dummyObject, product.id)}
                >
                  Edit
                </Button>
                <Button
                  variant='danger'
                  onClick={() => deleteProductByID(product.id)}
                  style={{ marginLeft: '10px', minWidth: '100px' }}
                >
                  Delete
                </Button>
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
