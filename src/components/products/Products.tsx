import { useState, useEffect, FC } from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { IProduct } from '../../Interfaces/IProducts';
import { productService } from '../../services/productService';
import '../../App.css';

// useState
const Products: FC = () => {
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

  const deleteProductByID = async (id?: string) => {
    await productService.deleteProduct(id);
    getProduct();
  };

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
        <Col>
          <div className='card-container'>
            <Card className='Cards' key={key} style={{ width: '18rem', }}>
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
                  onClick={() => updateProduct(dummyObject)}
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
    <div className='Products'>
      <h1>Our Products</h1>
      <Row>{createProductList()}</Row>
    </div>
  );
}

export default Products;
