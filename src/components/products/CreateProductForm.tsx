import { FC, useContext } from 'react';
import { productService } from '../../services/productService';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ProductContextType } from '../../types/ProductContextType';
import { ProductContext } from '../../Contexts/ProductContext';

const CreateProductForm: FC = () => {
  const {newProduct, newImage, handleChange, } = useContext(ProductContext) as ProductContextType
  const history = useHistory();

  const postNewProduct = () => {
    if (newProduct.name === '' || newProduct.type === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields must be filled out',
      });
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'New product was created',
      showConfirmButton: false,
      timer: 1500,
    });
    productService.postProduct(newProduct, newImage as File);
    history.push('/productPage');
  };

  return (
    <Container>
    <div className='form-container text-center'>
      <Col md="7">
      <Form className='post-form '>
        <Form.Group className=' mb-3'>
          <Form.Label>
            <h5>Product name:</h5>
          </Form.Label>
          <Form.Control onChange={handleChange} name='name' type='text' placeholder="e.g Nike sweater"/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>
            <h5>Choose image:</h5>
          </Form.Label>
          <Form.Control onChange={handleChange} name='image' type='file' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>
            <h5>Select type:</h5>
          </Form.Label>
          <Form.Control onChange={handleChange} name='type' type='text' placeholder="e.g Sweater" />
        </Form.Group>
        <Button
          onClick={postNewProduct}
          className="addNewButton"
          type='button'
          variant='primary'
          value='Save new product'
        >
          <h6>Add product + </h6>
        </Button>
      </Form>
      </Col>
    </div>
    </Container>
  );
};

export default CreateProductForm;
