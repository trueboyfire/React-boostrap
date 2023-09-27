import { Container, Row, Col, Form } from "react-bootstrap";
import NewsLetter from "../../layouts/section/home";
import ContactHeader from "../../layouts/headers/contact";
import pick from "./peace.png"


export default function ContactPage() {
  return (
    <div>
      <ContactHeader />
      <Container>
        <Row style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin:40}}>
          <Col lg={6} sm={12}>
            <img src={pick} alt="Contact Image" width={400}/>
          </Col>
          <Col lg={6} sm={12}>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First name</Form.Label>
                <Form.Control type="firstname" placeholder="enter your first name" />
                <Form.Label>Second name</Form.Label>
                <Form.Control type="secondname" placeholder="enter your second name" />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <NewsLetter />
    </div>
  );
}
