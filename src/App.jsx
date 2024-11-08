import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import PostCard from "./components/PostCard";
import { PostContext } from "./context/PostContext";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { posts, postDispatch } = useContext(PostContext);

  const formSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/posts", {
      title,
      body,
    });
    postDispatch({ type: "addPosts", payload: response.data.result });
    // addPosts(response.data.result);
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
            <PostCard {...post}></PostCard>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
