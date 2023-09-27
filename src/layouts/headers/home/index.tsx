import { Col, Row, Container, Button } from "react-bootstrap";
import image from "../../../assets/images/fin.png";

export default function Header(): React.JSX.Element {
  return (
    <div className="bg-dark text-light py-5" style={{ width: "100%" }}>
      <Container className="container">
        <Row style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div style={{ width: "80%", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
              <h2 className="my-2" style={{ textTransform: "capitalize" }}>
                Welcome to Our react class{" "}
              </h2>
              <p className="py-1 mb-5">
                We are learning ReactJS with Typescript, Vite and Bootstrap 5. Working on building a mobile responsive website. Join us now to learn more.
              </p>
              <Button style={{ borderRadius: 21 }}>Learn more</Button>
            </div>
          </Col>
          <Col className="d-lg-block  d-none" xs={12} sm={12} md={12} lg={6}>
            <img src={image} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
