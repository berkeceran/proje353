/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img1 from "../../images/carRental.jpg";
import SwitchButton from "../Switch/SwitchButton";
//import { useHistory, useLocation, Redirect } from "react-router-dom";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // let history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Container>
        <Row>
          <Col lg={6} style={{}}>
            <img
              src={img1}
              alt=""
              style={{
                width: "600px",
                height: "500px",
                marginTop: "250px",
              }}
            />
          </Col>
          {/*<SwitchButton /> */}
          <Col
            lg={6}
            style={{ alignItems: "center", flext: "1", marginTop: "200px" }}
          >
            <div className="Login">
              <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                  <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ marginTop: "5px" }}
                  />
                  {<AiOutlineMail className="email-icons" />}
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Control
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ marginTop: "20px" }}
                  />
                  <RiLockPasswordFill className="password-icons" />
                </Form.Group>

                <Button
                  style={{ marginTop: "10px", width: "150px" }}
                  block
                  size="lg"
                  type="submit"
                  disabled={!validateForm()}
                >
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
