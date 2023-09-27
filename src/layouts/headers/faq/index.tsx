import {Container } from "react-bootstrap";

export default function FaqHeader(): React.JSX.Element {
  return (
    <div className="bg-dark text-light py-5" style={{ width: "100%" }}>
      <Container className="container">
            <div className="text-center">
              <h2 className="my-2" style={{ textTransform: "capitalize" }}>
                FAQ{" "}
              </h2>
            </div>
        
      </Container>
    </div>
  );
}
