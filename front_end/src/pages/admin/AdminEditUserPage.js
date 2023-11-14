import { Col, Container, Row ,Form, Button} from "react-bootstrap";
import {Link} from 'react-router-dom'
import { useState } from "react";

const AdminEditUserPage = () => {
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
          <h1>Edit User</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='fromBasicFirstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control name='firstName' required type='text' defaultValue='Carlos'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control name='lastName' required type='text' defaultValue='cabrera' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control name='email' required type='email' defaultValue='carlos@email.com' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check name="isAdmin" type='checkbox' label='Is admin' />
            </Form.Group>
            <Button variant="primary" type="submit">Update</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditUserPage;