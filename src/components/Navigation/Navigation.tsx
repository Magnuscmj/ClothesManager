import { FC } from "react";
import * as ReactBootStrap from "react-bootstrap";


const Navigation: FC = () => {
    return (
        <div>
        <ReactBootStrap.Navbar bg="light" variant="light">
          <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="#home">Clothes Store</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Nav className="me-auto">
            <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#features">Products</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">Add Products</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      </div>     
    );
}

export default Navigation;