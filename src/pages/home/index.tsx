import { Container, Row, Col } from "react-bootstrap";
import { data } from "../../data/blog";
import BlogItem from "../../components/blogs/blogitem";
import Header from "../../layouts/headers/home";
import NewsLetter from "../../layouts/section/home";
import CallToAction from "../../components/cta";
import { BrandI, brands1, brands2, brands3, brands4 } from "../../data/brands";
import React from "react";
import { useEffect, useState } from "react";

function Item(props: BrandI): React.JSX.Element {
  const { name, logo } = props;
  const [isVisible, setIsVisible] = useState(false);

  const itemStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    margin: "5px",
    width: "100%",
    boxSizing: "border-box",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.5s, transform 0.5s",
  };

  const imgStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={itemStyle}>
      <img title={name} src={logo} alt="" style={imgStyle} />
    </div>
  );
}
export default function HomePage() {
  const [arr, setArr] = React.useState<BrandI[] | null>();
  let name: string = "P";

  React.useEffect(() => {
    switch (name) {
      case "A":
        setArr(brands1);
        break;
      case "P":
        setArr(brands2);
        break;
      case "S":
        setArr(brands3);
        break;
      case "E":
        setArr(brands4);
        break;
      default:
        setArr(null);
    }
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <div className="container d-flex justify-content-between">
          {arr?.map((item: BrandI) => (
            <Item name={item.name} logo={item.logo} />
          ))}
        </div>
        <CallToAction
          title="who we are"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor nisl at quam ultricies, sit amet eleifend justo tristique. Fusce tincidunt dolor id varius efficitur. Aliquam at quam a nisl placerat varius. Duis ullamcorper ultrices facilisis. Curabitur ut justo eu metus cursus euismod. "
          buttonText="learn more"
          image="https://botcore.ai/wp-content/uploads/2022/09/How-Can-Traditional-Banks-Challenge-the-Fintech-Space-with-Conversational-AI.png"
          url="/about"
        />
      </Container>
      <Container>
        <h1 className="mt-4 mb-4">OUR BLOG POSTS</h1>
        <Row>
          {data?.map((item: any, index: number) => (
            <Col key={index} xs={12} sm={6} lg={4} md={6} style={{ height: 450 }}>
              <BlogItem data={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <NewsLetter />
    </div>
  );
}
