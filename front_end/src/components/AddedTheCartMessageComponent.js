import { Alert, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState } from "react";

const AddedTheCartMessageComponent = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>The product was added to your cart!</Alert.Heading>
        <p>
          <Button variant="success">Go back</Button>{' '}
          <Link to='/cart'>
            <Button variant="danger">Go to cart</Button>
          </Link>
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default AddedTheCartMessageComponent;