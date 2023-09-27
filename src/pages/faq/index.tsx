import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CallToAction from "../../components/cta";

export default function FaqHeader(): React.JSX.Element {
  const faqItems = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    },
    {
      question: "Why do we use it?",
      answer: "It is a long established fact that a reader will be distracted by the readable content " + "of a page when looking at its layout...",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots " +
        "in a piece of classical Latin literature from 45 BC, making it over 2000 years old...",
    },
    {
      question: "Where can I get some?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority " +
        "have suffered alteration in some form, by injected humour, or randomised words " +
        "which don't look even slightly believable...",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: number | React.SetStateAction<any>) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const accordionStyle = {
    background: "#f8f9fa",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    background: "#343a40",
    color: "white",
    padding: "10px",
    borderRadius: "10px 10px 0 0",
    cursor: "pointer",
  };

  const bodyStyle = {
    padding: "15px",
    borderTop: "1px solid #dee2e6",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  };

  return (
    <div className="container mt-5">
      <CallToAction
        title="Frequently Asked Question"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor nisl at quam ultricies, sit amet eleifend justo tristique. Fusce tincidunt dolor id varius efficitur. Aliquam at quam a nisl placerat varius. Duis ullamcorper ultrices facilisis. Curabitur ut justo eu metus cursus euismod. "
        buttonText="learn more"
        image="https://botcore.ai/wp-content/uploads/2022/09/How-Can-Traditional-Banks-Challenge-the-Fintech-Space-with-Conversational-AI.png"
        url="/about"
      />
      <h1 className="text-center mb-4">Frequently Asked Questions</h1>
      <Accordion>
        {faqItems.map((item, index) => (
          <Card key={index} style={accordionStyle}>
            <Card.Header style={headerStyle} onClick={() => toggleAccordion(index)}>
              <Button variant="link" style={{ color: "inherit", textDecoration: "none" }}>
                {item.question}
              </Button>
            </Card.Header>
            {activeIndex === index && <Card.Body style={bodyStyle}>{item.answer}</Card.Body>}
          </Card>
        ))}
      </Accordion>
    </div>
  );
}
