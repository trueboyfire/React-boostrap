import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/google.png";
import image from "../../assets/images/apple.png";
import truth from "../../assets/images/truth.png";

export default function MyFooter(): React.JSX.Element {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollBottom = () => {
    if (!showScroll && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setShowScroll(true);
    } else if (showScroll && window.innerHeight + window.scrollY < document.body.offsetHeight) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScrollBottom);
    return () => {
      window.removeEventListener("scroll", checkScrollBottom);
    };
  }, []);

  return (
    <footer className="bg-dark text-light text-center p-3 pt-4">
      <Container className="container" fluid>
        <div className="my-3" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <img src={truth} alt="" width={72} />
        </div>
        <Row>
          <Col xs={12} sm={6} md={3} style={{ textAlign: "left" }}>
            <p>House 7 Anu Crescent Estate Badore</p>
            <p>+2347063142073</p>
            <p>philipkeyz127@gmail.com</p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <a href="#">About us</a> <br />
            <br />
            <a href="#">Contact us </a>
            <br />
            <br />
            <a href="#">FAQ</a>
            <br />
            <br />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <p>privacy policy</p>
            <p>Terms of use </p>
            <p>Site map</p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "stretch" }}>
              <a href="">
                <img src={Logo} alt="" width={90} />
              </a>
              <a href="">
                <img src={image} alt="" width={90} />
              </a>
            </div>
          </Col>
          <p style={{ paddingTop: 10, textAlign: "center", width: "100%" }}>&copy; 2023 My Blog. All rights reserved.</p>
        </Row>
        {showScroll && (
          <Button className="scroll-to-top rounded-pill" onClick={scrollTop}>
            &uarr;
          </Button>
        )}
      </Container>
    </footer>
  );
}
