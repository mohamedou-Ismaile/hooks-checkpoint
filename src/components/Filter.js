

import {Col,Row,Table} from 'react-bootstrap';
function Filter({movie}) {
    return (
      <div >
    
       <Row className="justify-content-center pt-5  " > 
        <Col xs="7">
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Title</th>
      <th>Description</th>
      <th>PostURL</th>
      <th>Rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{movie.title}</td>
      <td>{movie.description}</td>
      <td>{movie.postURL}</td>
      <td>{movie.rating}</td>
    </tr>
    
  </tbody>
</Table>
</Col>
</Row>
      </div>
    );
  };
  export default Filter;