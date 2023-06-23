import { Row, Col, Alert, Container, ListGroup, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import CartItemComponet from '../components/CartItemComponent';

const CartPage = () => {
  return (
    <Container fluid>
      <Row className='mt-4'>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          <ListGroup variant='flush'>
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponet key={idx}></CartItemComponet>
            ))}
          </ListGroup>
          <Alert varent='info'>Your cart is empty</Alert>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Subtotal (2 items)</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <span classNmae='fw-bold'>$892</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to='/user/order-details'>
                <Button type='button'>Proceed to Checkout</Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
};

export default CartPage;