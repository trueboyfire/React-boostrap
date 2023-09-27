import { Button, Form, Container } from "react-bootstrap";

export default function NewsLetter(): React.JSX.Element {
  return (
    <div>
      <Container
        className="container d-block text-center p-4"
        style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center" }}
      >
        <h2>subcribe to Newsletter</h2>
        <br />
        <Form
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2px",
            borderRadius: "10px",
            border: "1.5px solid",
          }}
        >
          <Form.Control style={{ border: "none" }} type="email" placeholder="Enter your Email" />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
}
