import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { loginRequest } from "../../Redux/Action";
import loginFormSchema from "../../Helper/ValidSchema";
const Login = (props) => {
  const initialStates = {
    email: "",
    password: "",
  };
  const errorsState = {
    email: "",
    password: "",
  };
  const [inputs, setInputs] = useState(initialStates);
  const [errors, setError] = useState(errorsState);

  useEffect(() => {}, []);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setError({
      ...errors,
      [e.target.name]: "",
    });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    loginFormSchema
      .validate(
        {
          email: inputs.email,
          password: inputs.password,
        },
        { abortEarly: false }
      )
      .then(
        props.loginRequest({
          email: inputs.email,
          password: inputs.password,
        })
        // console.log(inputs, "=============")
      )
      .catch((err) => {
        let tempErrors = {};
        err.inner.forEach((error) => {
          tempErrors = {
            ...tempErrors,
            [error.path]: error.message,
          };
        });
        setError({
          ...errors,
          ...tempErrors,
        });
      });
  };

  return (
    <>
      <Container>
        <div className={"about-warp mb-5"}>
          <h1 className={"text-center pt-4 pb-4"}>Login</h1>
          <Row className={"justify-content-center"}>
            <Col md={6} sm={6}>
              <Card>
                <Card.Body>
                  <Form onSubmit={loginSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        value={inputs.email || ""}
                        placeholder="Enter email"
                        name="email"
                        onChange={handleChange}
                      />
                      <p className="text-danger">{errors.email}</p>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="text"
                        name="password"
                        value={inputs.password || ""}
                        placeholder="Enter password"
                        onChange={handleChange}
                      />
                      <p className="text-danger">{errors.password}</p>
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={loginSubmit}
                    >
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (data) => {
    dispatch(loginRequest(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
