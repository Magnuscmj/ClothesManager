import { useState, useEffect, FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { productService } from '../../services/productService';
import '../../App.css';
import { IProduct } from '../../Interfaces/Interfaces';
import { UpdateProductModal } from './UpdateProductModal';
import { ProductCard } from './ProductCard';
import { Link } from 'react-router-dom';

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
    setSelectedId(id);
    console.log(selectedId);
  };

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

  const updateProduct = async (
    data: IProduct,
    image: File | undefined,
    id?: string
  ) => {
    await productService.updateProduct(data, image, id);
    getProducts();
    handleClose();
  };

  // bootstrap card-display
  const createProductList = () => {
    return products.map((product: IProduct, key: number) => {
      return (
        <Col key={key}>
          <div className='card-container'>
            <ProductCard
              product={product}
              handleShow={handleShow}
              deleteProductByID={deleteProductByID}
            />
          </div>
        </Col>
      );
    });
  };

  // returns and shows createProductList
  return (
    <Container className='Products'>
      <Row>
        <Col className='text-center'>
          <Link to={'/createPage'}>
          <Button className='createButton' variant='success'>
            <h4>Create New Product +</h4>
          </Button>
          </Link>
        </Col>
      </Row>
      <Row>{createProductList()}</Row>
      <UpdateProductModal
        updateFunction={updateProduct}
        showModal={showModal}
        setShowModal={setShowModal}
        handleClose={handleClose}
        handleShow={handleShow}
        selectedId={selectedId}
      />
    </Container>
  );
};

export default Products;
