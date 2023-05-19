import { Row, Col, Container, Image, ListGroup } from 'react-bootstrap';
import AddedTheCartMessageComponent from '../components/AddedTheCartMessageComponent'
import { Rating } from 'react-simple-star-rating'

const ProductDetailsPage = () => {
  return (
    <Container>
      <AddedTheCartMessageComponent />
      <Row className='mt-5'>
        <Col md={4}>
          <Image fluid src='/images/games-category.png' />
          <Image fluid src='/images/tablets-category.png' />
          <Image fluid scr='/images/monitors-category.png' />
          <Image fluid scr='/images/games-category.png' />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant='flush'>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initalValue={4} /> (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  Morbi leo risus
                </ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              product status, quantity
            </Col>
          </Row>
          <Row>
            <Col className='mt-5'>
              <h5>REVIEWS</h5>
            </Col>
          </Row>
          <hr />
          send review form
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetailsPage;