import { FC, ChangeEvent, useState } from 'react';
import { productService } from '../../services/productService';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { IProduct } from '../../Interfaces/Interfaces';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const CreateProductForm: FC = () => {
  const [newProduct, setNewProduct] = useState<IProduct>({
    name: '',
    image: '',
    type: '',
  });
  const [newImage, setNewImage] = useState<File>();
  const history = useHistory();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name } = event.target;
    let value;

    switch (name) {
      case 'name':
        value = event.target.value;
        setNewProduct({ ...newProduct, name: value });
        break;
      case 'image':
        let { files } = event.target;
        if (files) {
          setNewProduct({ ...newProduct, image: files[0].name });
          setNewImage(files[0]);
        }
        break;
      case 'type':
        value = event.target.value;
        setNewProduct({ ...newProduct, type: value });
        break;
    }
  };

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
    history.push('/');
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
          <Form.Control onChange={handleChange} name='name' type='text'/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>
            <h5>Chose image:</h5>
          </Form.Label>
          <Form.Control onChange={handleChange} name='image' type='file' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>
            <h5>Select type:</h5>
          </Form.Label>
          <Form.Control onChange={handleChange} name='type' type='text' />
        </Form.Group>
        <Button
          onClick={postNewProduct}
          className="addNewButton"
          type='button'
          variant='primary'
          value='Save new product'
        >
          <h6>Add new products to card + </h6>
        </Button>
      </Form>
      </Col>
    </div>
    </Container>
  );
};

export default CreateProductForm;
