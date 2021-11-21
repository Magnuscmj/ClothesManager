import { FC, ChangeEvent, useState } from 'react';
import { productService } from '../../services/productService';
import { Button, Form } from 'react-bootstrap';
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
    <div className='form-container'>
      <h1>Create new products</h1>
      <Form className='post-form'>
        <Form.Group className=' mb-3 w-100'>
          <Form.Label>
            <h4>Product name:</h4>
          </Form.Label>
          <Form.Control onChange={handleChange} name='name' type='text' />
        </Form.Group>
        <Form.Group className='mb-3 w-100'>
          <Form.Label>
            <h4>Chose image:</h4>
          </Form.Label>
          <Form.Control onChange={handleChange} name='image' type='file' />
        </Form.Group>
        <Form.Group className='mb-3 w-100'>
          <Form.Label>
            <h4>Select type:</h4>
          </Form.Label>
          <Form.Control onChange={handleChange} name='type' type='text' />
        </Form.Group>
        <Button
          onClick={postNewProduct}
          type='button'
          variant='success'
          value='Save new product'
        >
          Add new products to card
        </Button>
      </Form>
    </div>
  );
};

export default CreateProductForm;
