import React from "react";
import Socials from "./Socials";
import About from "./About";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Layout() {
  return (
    <Container fluid className="mt-5 d-flex justify-content-around">
      <Container className="col-12 col-md-5 container-socials p-3 flex-wrap">
        <div className="d-flex justify-content-between">
          <Row className="p-3 mt-5 d-flex">
            <Socials />
          </Row>
          <Row className="col-6 d-flex">
            <About />
          </Row>
        </div>
      </Container>
    </Container>
  );
}
