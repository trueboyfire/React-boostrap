import React from "react";
import { Button, Col, Row } from "react-bootstrap";

interface CTAProps {
  title: string;
  desc: string;
  buttonText: string;
  image: string;
  url: string;
}

export default function CallToAction(props: CTAProps): React.JSX.Element {
  const { title, desc, buttonText, image, url } = props;
  return (
    <div className="mt-5">
      <Row>
      <Col sm={12} md={6} className="d-block d-sm-none ">
          <img src={image} alt="" width="90%"  />
        </Col>
        <Col  sm={12} md={6}>
          <div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <Button className="text-light" >
              <a href={url} style={{color: 'white'}}> {buttonText} </a>
            </Button>
          </div>
        </Col>
        <Col sm={12} md={6} className="d-none d-sm-block">
          <img src={image} alt="" width="90%" />
        </Col>
      </Row>
    </div>
  );
}
