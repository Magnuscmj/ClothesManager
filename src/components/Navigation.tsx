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
              GET
              </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href='postPage'>
              POST
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href='deletePage'>
              DELETE
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href='editPage'>
              EDIT
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </>
  );
};

export default Navigation;
