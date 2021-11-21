import { FC } from 'react';
import * as ReactBootStrap from 'react-bootstrap';

const Navigation: FC = () => {
  return (
    <>
      <ReactBootStrap.Navbar bg='light' variant='light' sticky="top">
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href='/'>
            MyClothes
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Nav className='me-auto'>
            <ReactBootStrap.Nav.Link href='/productPage'>Your Products</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href='/createPage'>
              Add Product
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href='/filterPage'>
              Filter Products
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </>
  );
};

export default Navigation;
