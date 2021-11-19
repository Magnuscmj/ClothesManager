import React, { FC, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import {IUpdateProductModal} from '../../Interfaces/Interfaces'
import { UpdateProductForm } from './UpdateProductForm';

export const UpdateProductModal: FC<IUpdateProductModal> = (props) => {


  return (
    <>
      <Modal show={props.showModal} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <UpdateProductForm updateFunction={props.updateFunction} id={props.selectedId}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
