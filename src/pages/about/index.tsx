import { Container, Row, Col } from "react-bootstrap";
import NewsLetter from "../../layouts/section/home";
import ABoutHeader from "../../layouts/headers/about";
import Las from "../../assets/images/fina.png"
import Pat from "../../assets/images/fem.png"


export default function AboutPage() {
  return (
    <div>
      <ABoutHeader />
      <Container>
        <Row style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Col lg={6} sm={12}>
          <img src={Las} alt="About Image"  width={350}/>
          </Col>
          <Col lg={6} sm={12}>
          <div style={{ width: "80%", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
              <h2 className="my-2" style={{ textTransform: "capitalize" }}>
                Welcome to Our About page{" "}
              </h2>
              <p className="py-1 mb-5" >We are learning ReactJS with Typescript, Vite and Bootstrap 5. Working on building a mobile responsive website. Join us now to learn more.</p>
            </div>
          </Col>
        </Row>
        <Row style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
         
          <Col lg={6} sm={12}>
          <div style={{ width: "80%", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
              <h2 className="my-2" style={{ textTransform: "capitalize" }}>
                why choose our product?{" "}
              </h2>
              <p className="py-1 mb-5" >We are learning ReactJS with Typescript, Vite and Bootstrap 5. Working on building a mobile responsive website. Join us now to learn more.</p>
            </div>
          </Col>
          <Col lg={6} sm={12}>
          <img src={Pat} alt="About Image" width={350}/>
          </Col>
        </Row>
      </Container>
      <NewsLetter />
      
    </div>
  );
}

