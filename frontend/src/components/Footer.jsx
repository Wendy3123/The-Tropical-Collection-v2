import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center" py-3>
            {/* the &copy; prints the symbol c ==> ©  */}
            <p>The Tropical Colelction &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
