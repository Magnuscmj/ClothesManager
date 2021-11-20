import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import CreateProductForm from '../components/products/CreateProductForm';

const createPage: FC = () => {
  return (
    <Container>
      <CreateProductForm />
    </Container>
  );
};

export default createPage;
