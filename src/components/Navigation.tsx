import { FC } from 'react';
import * as ReactBootStrap from 'react-bootstrap';

const Navigation: FC = () => {
  return (
    <>
      <ReactBootStrap.Navbar bg='light' variant='light'>
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href='#home'>
            Clothes Store
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Nav className='me-auto'>
            <ReactBootStrap.Nav.Link href='/'>
              GET
              </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href='#features'>
              POST
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href='#pricing'>
              DELETE
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href='#pricing'>
              EDIT
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </>
  );
};

export default Navigation;
