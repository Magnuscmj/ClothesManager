import React, { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import { IProductItem } from '../../Interfaces/Interfaces'

export const ProductCard: FC<IProductItem> = (props) => {
    return (
        <Card className='Cards' style={{ width: '18rem' }}>
              <Card.Img
                style={{
                  maxWidth: '350px',
                  height: '200px',
                  objectFit: 'cover',
                }}
                variant='top'
                src={`https://localhost:5001/images/${props.product.image}`}
              />
              <Card.Body>
                <Card.Title> {props.product.name} </Card.Title>
                <Card.Text> {props.product.type} </Card.Text>
                <Button
                  variant='primary'
                  style={{ marginRight: '10px', minWidth: '100px' }}
                  onClick={() => props.handleShow(props.product.id)}
                >
                  Edit
                </Button>
                <Button
                  variant='danger'
                  onClick={() => props.deleteProductByID(props.product.id)}
                  style={{ marginLeft: '10px', minWidth: '100px' }}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
    )
}
