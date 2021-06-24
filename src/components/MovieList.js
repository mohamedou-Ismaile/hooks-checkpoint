

import {Card,CardGroup,Row,Col} from 'react-bootstrap';
import imageSrc from "../movies.png";
function MovieList({movie}) {
    return (
      <div style={{ display: 'table-cell', width: 400, padding: 30 }} >
         
         
                   
                        <Row>
                            <Col>
                            <CardGroup>
  <Card>
    <Card.Img variant="top" src={imageSrc} xs="3" md="2"/>
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
        {movie.description} <br></br>
        {movie.postURL} <br></br>
        {movie.rating}
        
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

</CardGroup>
                            </Col>
                        </Row>
   



      </div>
    );
  };
  export default MovieList;