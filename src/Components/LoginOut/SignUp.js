/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { BsPersonSquare } from "react-icons/bs";
import { BsCalendar2DateFill } from "react-icons/bs";
import { AiFillIdcard } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import img1 from "../../images/carRental.jpg";
import SwitchButton from "../Switch/SwitchButton";
//import { useHistory, useLocation, Redirect } from "react-router-dom";

import "./Login.css";

function SignUp() {
  const [person, setPerson] = useState({
    name: "",
    surname: "",
    email: "",
    birthDate: "",
    nationalId: "",
    password: "",
    verifyPassword: "",
    address: "",
  });
  const [startDate, setStartDate] = useState(new Date());
  // let history = useHistory();

  function validateForm() {
    //return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const handleChange = (e) => {
    setPerson((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };

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
                <Form.Group size="lg" controlId="name">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="name"
                    value={person.name}
                    placeholder="Name"
                    onChange={handleChange}
                    style={{ marginTop: "5px" }}
                  />
                  {<BsFillPersonFill className="email-icons" />}
                </Form.Group>

                <Form.Group size="lg" controlId="surname">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="surname"
                    value={person.surname}
                    placeholder="Surname"
                    onChange={handleChange}
                    style={{ marginTop: "20px" }}
                  />
                  {<BsPersonSquare className="email-icons" />}
                </Form.Group>

                <Form.Group size="lg" controlId="email">
                  <Form.Control
                    autoFocus
                    type="email"
                    name="email"
                    value={person.email}
                    placeholder="Email"
                    onChange={handleChange}
                    style={{ marginTop: "20px" }}
                  />
                  {<AiOutlineMail className="email-icons" />}
                </Form.Group>

                <div style={{ marginTop: "20px", alignItems: "left" }}>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                {<BsCalendar2DateFill className="email-icons" />}
                <Form.Group size="lg" controlId="natiaonalId">
                  <Form.Control
                    autoFocus
                    type="number"
                    name="nationalId"
                    value={person.nationalId}
                    placeholder="National Id"
                    onChange={handleChange}
                    style={{ marginTop: "20px" }}
                  />
                  {<AiFillIdcard className="email-icons" />}
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Control
                    autoFocus
                    type="password"
                    name="password"
                    value={person.password}
                    placeholder="Password"
                    onChange={handleChange}
                    style={{ marginTop: "20px" }}
                  />
                  {<RiLockPasswordLine className="password-icons" />}
                </Form.Group>

                <Form.Group size="lg" controlId="verifyPassword">
                  <Form.Control
                    autoFocus
                    type="password"
                    name="verifyPassword"
                    value={person.verifyPassword}
                    placeholder="Verify Password"
                    onChange={handleChange}
                    style={{ marginTop: "20px" }}
                  />
                  {<RiLockPasswordFill className="password-icons" />}
                </Form.Group>

                <Form.Group size="lg" controlId="address">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="address"
                    value={person.address}
                    placeholder="Address"
                    onChange={handleChange}
                    style={{ marginTop: "20px" }}
                  />
                  {<FaAddressCard className="email-icons" />}
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

export default SignUp;
