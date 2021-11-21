import { FC, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ProductContext } from '../../Contexts/ProductContext';
import { ProductContextType } from '../../types/ProductContextType';
import { UpdateProductForm } from './UpdateProductForm';

export const UpdateProductModal: FC = () => {
  const context = useContext(ProductContext) as ProductContextType
  return (
    <>
      <Modal
        show={context.showModal}
        onHide={context.handleClose}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateProductForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={context.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
