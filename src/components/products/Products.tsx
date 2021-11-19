import { useState, useEffect, FC } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { productService } from '../../services/productService';
import '../../App.css';
import { IProduct } from '../../Interfaces/Interfaces';
import { UpdateProductModal } from './UpdateProductModal';


// useState
const Products: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([
    { id: 'loading..', name: 'Loading..', type: 'Loading..', image: 'loading' },
  ]);

  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = (id?: string) => {
    setShowModal(true);
    setSelectedId(id)
  }

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
    getProducts();
  };

  const updateProduct = async (data: IProduct, id?: string) => {
    await productService.updateProduct(data, id);
    getProducts();
  };

  // bootstrap card-display
  const createProductList = () => {
    return products.map((product: IProduct, key: number) => {
      
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
                  onClick={() => handleShow(product.id)}
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
      <UpdateProductModal updateFunction={updateProduct} showModal={showModal} setShowModal={setShowModal} handleClose={handleClose} handleShow={handleShow} selectedId={selectedId}/>
    </div>
  );
}

export default Products;
