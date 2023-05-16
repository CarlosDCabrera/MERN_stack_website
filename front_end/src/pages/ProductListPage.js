import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import SortOptionsComponent from '../components/SortOptionsComponent';
import AttributesFilterComponent from '../components/filterQueryResultOptions/AttributesFilterComponent';
import CategoryFilterComponent from '../components/filterQueryResultOptions/CategoryFilterComponent';
import PriceFilterComponent from '../components/filterQueryResultOptions/PriceFilterComponent';
import RatingFilterComponent from '../components/filterQueryResultOptions/RatingFilterComponent';
import ProductForListComponent from '../components/ProductForListComponent';
import PaginationComponent from '../components/PaginationComponent';

const ProductListPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item><SortOptionsComponent /></ListGroup.Item>
            <ListGroup.Item><PriceFilterComponent /></ListGroup.Item>
            <ListGroup.Item><RatingFilterComponent /></ListGroup.Item>
            <ListGroup.Item><CategoryFilterComponent /></ListGroup.Item>
            <ListGroup.Item><AttributesFilterComponent /></ListGroup.Item>
            <ListGroupItem><Button variant='primary'>Primary</Button></ListGroupItem>
            <ListGroupItem><Button variant='danger'>Danger</Button></ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={9}>
          <ProductForListComponent />
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default ProductListPage;