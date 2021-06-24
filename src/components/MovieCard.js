import React,{useState} from 'react'
import {Button,Form,Col,Container,Row} from 'react-bootstrap';

export default function MovieCard({ addMovie }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [postURL, setPostURL] = useState("");
    const [rating, setRating] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!title && !description && !postURL && !rating) return;
      addMovie(title,description,postURL,rating);
      setTitle("");
      setDescription("");
      setPostURL("");
      setRating("");
    };
    return (
        <div>
            <Container className="contact-content debug-border pt-10 login"  >
                <Row className="justify-content-center " >       
                     <Col xs="3">
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter Title"  value={title}
          onChange={e => setTitle(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" placeholder="Description" value={description}
          onChange={e => setDescription(e.target.value)}/>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>PostURL</Form.Label>
    <Form.Control  type ="text" placeholder="Post URL" value={postURL}
          onChange={e => setPostURL(e.target.value)}/>
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Rating</Form.Label>
    <Form.Control type="text" placeholder="Rating" value={rating}
          onChange={e => setRating(e.target.value)}/>
  </Form.Group>

  

 
<br></br>
  <Button variant="primary" type="submit" onClick={handleSubmit}>
    Add
  </Button>
</Form>
</Col>
</Row>  
</Container>
        </div>
    )
}
