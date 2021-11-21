import { ChangeEvent, FC, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { IUpdateProduct, IUpdateProductForm } from '../../Interfaces/Interfaces';

export const UpdateProductForm: FC<IUpdateProductForm> = (props) => {
    const [newProduct, setNewProduct] = useState<IUpdateProduct>({
        name: '',
        image: '',
        type: '',
      });

      const [newImage, setNewImage] = useState<File>();
    
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
      
    return (
        <Container>
        <Form>
        <Form.Group className=' mb-3 w-100'>
          <Form.Label><h4>Product name:</h4></Form.Label>
          <Form.Control onChange={handleChange} name='name' type='text' />
        </Form.Group>
        <Form.Group className='mb-3 w-100'>
          <Form.Label><h4>Chose image:</h4></Form.Label>
          <Form.Control onChange={handleChange} name='image' type='file' />
        </Form.Group>
        <Form.Group className='mb-3 w-100'>
          <Form.Label><h4>Select type:</h4></Form.Label>
          <Form.Control onChange={handleChange} name='type' type='text' />
        </Form.Group>
        <Button onClick={() => props.updateFunction(newProduct, newImage, props.id)} type='button' variant='success' value='Save new product'>
          Update Product
        </Button>
        </Form>
        </Container> 
    )
}
