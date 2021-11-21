import { useEffect, FC, useContext } from 'react';
import { Button, Col, Container, Row} from 'react-bootstrap';
import '../../App.css';
import { IProduct } from '../../Interfaces/Interfaces';
import { UpdateProductModal } from './UpdateProductModal';
import { ProductCard } from './ProductCard';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Contexts/ProductContext';
import { ProductContextType } from '../../types/ProductContextType';


const ListProducts: FC = () => {
  const context = useContext(ProductContext) as ProductContextType;

  useEffect(() => {
    context.getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // bootstrap card-display
  const createProductList = () => {
    return context.products.map((product: IProduct, key: number) => {
      return (
        <Col key={key}>
          <div className='card-container'>
            <ProductCard
              product={product}
              handleShow={context.handleShow}
              deleteProductByID={context.deleteProductByID}
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
      <UpdateProductModal/>
    </Container>
  );
};

export default ListProducts;
