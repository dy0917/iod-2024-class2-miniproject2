import { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import PostCard from "./components/PostCard";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  const deletePostById = (id) => {
    const resultList = posts.filter((post) => post.id !== id);
    setPosts(resultList);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/posts", {
      title,
      body,
    });
    setPosts([...posts, response.data.result]);
  };
  return (
    <>
      <Container>
        <Row>
          <Form onSubmit={formSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Body</Form.Label>
              <Form.Control
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Row>
        <Row>
          {posts.map((post) => (
            <PostCard {...post} deletePostById={deletePostById}></PostCard>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
