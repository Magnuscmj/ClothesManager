import { FC } from 'react';
import * as ReactBootStrap from 'react-bootstrap';

const Navigation: FC = () => {
  return (
    <>
      <ReactBootStrap.Navbar bg='light' variant='light'>
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href='/'>
            Clothes Store
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Nav className='me-auto'>
            <ReactBootStrap.Nav.Link href='/'>
              Products
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href='/createPage'>
              Create Product
              </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </>
  );
};

export default Navigation;
