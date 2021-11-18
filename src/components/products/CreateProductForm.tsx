import { FC, ChangeEvent, useState } from 'react';
import { productService } from '../../services/productService';
import { IProduct } from '../../Interfaces/IProducts';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

const CreateProductForm: FC = () => {
  const [newProduct, setNewProduct] = useState<IProduct>({
    name: '',
    image: '',
    type: '',
  });
  const [newImage, setNewImage] = useState<File>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name } = event.target;

    switch (name) {
      case 'name':
        var { value } = event.target;
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
        var { value } = event.target;
        setNewProduct({ ...newProduct, type: value });
        break;
    }
  };

  const postNewProduct = () => {
    productService.postProduct(newProduct, newImage as File);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Success, product created!',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className='form-container'>
      <h1>Create new products</h1>
      <Form className='post-form'>
        <Form.Group className=' mb-3 w-100'>
          <Form.Label>Product name:</Form.Label>
          <Form.Control onChange={handleChange} name='name' type='text' />
        </Form.Group>
        <Form.Group className='mb-3 w-100'>
          <Form.Label>Chose image:</Form.Label>
          <Form.Control onChange={handleChange} name='image' type='file' />
        </Form.Group>
        <Form.Group className='mb-3 w-100'>
          <Form.Label>Select type:</Form.Label>
          <Form.Control onChange={handleChange} name='type' type='text' />
        </Form.Group>
        <Button onClick={postNewProduct} type='button' value='Save new product'>
          Add new products to card
        </Button>
      </Form>
    </div>
  );
};

export default CreateProductForm;
