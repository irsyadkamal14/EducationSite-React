import React from "react";
import Accordion from "./services/Accordion.js";
import { Container, Row, Col } from "react-bootstrap";

const Question = () => {
  return (
    <div>
      <Container className="question-section" id="question">
        <Row>
          <Col>
            <div class="question-content">
              <h1>There Is Still Some Confusion ?</h1>
              <h3>Ask here</h3>
              <button>I am here</button>
            </div>
          </Col>
          <Col className="col-8">
            <Accordion />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Question;
