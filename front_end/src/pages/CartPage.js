import { Row, Col, Alert, Container, ListGroup, Button } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';

const CartPage = () => {
  return (
    <Container fluid>
      <Row className='mt-4'>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {Array.from({ length: 3 }).map((item) => (
            <>
              CartItemComponet
            </>
          ))}
          <Alert varent='info'>Your cart is emty</Alert>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Subtotal (2 items)</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <spam classNmae='fw-bold'>$892</spam>
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