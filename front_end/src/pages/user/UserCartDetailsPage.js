import { Alert, Col, Container, Row, Form, ListGroup, Button } from "react-bootstrap";
import CartItemComponent from '../../components/CartItemComponent';

const UserCartDeatilsPage = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <h1>Cart Deatils</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
              <b>Name</b>: Carlos Cabrera <br />
              <b>Address</b>: 5237 University Way NE APT 601, Seattle WA 98105 <br />
              <b>Phone</b>: (625) 777-6848
            </Col>
            <Col md={6}>
              <h2>Payment method</h2>
              <Form.Select>
                <option value='pp'>
                  Paypal
                </option>
                <option value='cod'>
                  Cash on Delivery (delivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3" variant="danger">
                  Not Delivered. In order to make order, fill out your profile
                  with correct address, city etc.
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant="success">
                  Not paid yet
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Oder Items</h2>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponent key={idx} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order Summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Items price (after tax): <span className="fw-bold">$892</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item className="danger">
              Total Price: <span className="fw-bold">$904</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button size="lg" variant="danger" type="button">
                  Pay for order
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default UserCartDeatilsPage;