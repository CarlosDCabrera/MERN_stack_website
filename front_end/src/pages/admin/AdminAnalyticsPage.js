import { Col, Form, Row } from "react-bootstrap";
import AdminLinksComponent from '../../components/admin/AdminLinksComponent';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminAnalyticsPage = () => {
  const data = [
    {
      name: '12:00AM',
      '2022 year': 4000,
      '2021 year': 4100,
    },
    {
      name: '1:00AM',
      '2022 year': 4200,
      '2021 year': 4300,
    },
    {
      name: '2:00AM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '3:00AM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '4:00AM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '5:00AM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '6:00AM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '7:00AM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '8:00AM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '9:00AM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '10:00AM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '11:00AM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '12:00PM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '1:00PM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '2:00PM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '3:00PM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '4:00PM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '5:00PM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '6:00PM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '7:00PM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '8:00PM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '9:00PM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '10:00PM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '11:00PM',
      '2022 year': 4400,
      '2021 year': 4500,
    },
    {
      name: '12:00PM',
      '2022 year': 4400,
      '2021 year': 4500,
    }
  ];
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>Black Friday Cummilative Revenue 11/26/2022 vs 11/27/2021</h1>
        <Form.Group controlId="firstDateToCompare">
          <Form.Label>Select First Date To Compare</Form.Label>
          <Form.Control type="date" name="firstDateToCompare" placeholder="First date to compare"/>
        </Form.Group>
        <br />
        <Form.Group controlId="seconfDateToCompare">
          <Form.Label>Select Second Date To Compare</Form.Label>
          <Form.Control type="date" name="secondDateToCompare" placeholder="second date to compare"/>
        </Form.Group>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label={{value: 'TIME', offset: 50, position: 'insideBottomRight'}} allowDuplicatedCategory={false} />
            <YAxis label={{value: 'Revenue $', angle: -90, position: 'insideLeft'}}/>
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Line type="monotone" dataKey="2021 year" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={4}/>
            <Line type="monotone" dataKey="2022 year" stroke="#82ca9d" strokeWidth={4}/>
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
}

export default AdminAnalyticsPage;