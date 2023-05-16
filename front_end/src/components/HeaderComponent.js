import {
  Navbar, Nav, Container, NavDropdown, Badge, Form, DropdownButton, Dropdown,
  InputGroup, Button
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand href="/">The Los Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="All">
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Books</Dropdown.Item>
                <Dropdown.Item>Cars</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Search in Shop..." />
              <Button variant="warning">
                <i className="bi bi-search text-dark"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to='admin/orders'>
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Carlos Cabrera" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey='/user/my-orders' as={Link} to="/user/my-orders">
                My orders
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='/user' as={Link} to="/user">
                My profile
              </NavDropdown.Item>
              <NavDropdown.Item>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to='/login'>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/register'>
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <Badge pill bg="danger">2</Badge>
                <i class="bi bi-cart-dash"></i> CART
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
};
export default HeaderComponent;