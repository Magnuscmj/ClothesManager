import { FC, useContext } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { ProductContext } from '../../Contexts/ProductContext';
import { ProductContextType } from '../../types/ProductContextType';

export const UpdateProductForm: FC = () => {
    const {handleChange, newProduct, newImage, selectedId, updateProduct} = useContext(ProductContext) as ProductContextType
      
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
        <Button onClick={() => updateProduct(newProduct, newImage, selectedId)} type='button' variant='success' value='Save new product'>
          Update Product
        </Button>
        </Form>
        </Container> 
    )
}
