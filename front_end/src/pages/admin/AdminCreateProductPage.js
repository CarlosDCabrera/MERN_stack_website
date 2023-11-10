import { Col, Container, Row ,Form, Button} from "react-bootstrap";
import {Link} from 'react-router-dom'
import { useState } from "react";

const AdminCreateProductPage = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={1}>
          <Link to='/admin/products' className="btn btn-info my-3">Go back</Link>
        </Col>
        <Col md={6}>
          <h1>Create a new product</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='fromBasicName'>
              <Form.Label>Name</Form.Label>
              <Form.Control name='name' required type='text' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Description</Form.Label>
              <Form.Control name='description' required as='textarea' rows={3} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCount'>
              <Form.Label>Count in stock</Form.Label>
              <Form.Control name='count' required type='number' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPrize'>
              <Form.Label>Price</Form.Label>
              <Form.Control name='price' required type="text" />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCategory'>
              <Form.Label>Category</Form.Label>
              <Form.Select name='category' required aria-label="default select example">
                <option>

                </option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminCreateProductPage;