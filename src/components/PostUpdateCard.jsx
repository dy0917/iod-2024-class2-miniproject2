import { Form, Button, Card } from "react-bootstrap";
import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

export default function PostUpdateCard({ id, title, body, setIsEdit }) {
  const { postDispatch } = useContext(PostContext);
  const [formTitle, setTitle] = useState(title);
  const [formBody, setBody] = useState(body);
  const formSubmit = () => {};
  const showEditView = () => {
    setIsEdit(false);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Form onSubmit={formSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={formTitle}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Body</Form.Label>
            <Form.Control
              type="text"
              value={formBody}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Save</Button>
          <Button variant="secondary" onClick={showEditView}>
            Cancal
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
