import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { signupRequest } from "../../Redux/Action";
import loginFormSchema from "../../Helper/ValidSchema";
const Signup = (props) => {
  const initialStates = {
    email: "",
    password: "",
    user_name: "",
    token: "",
  };
  const errorsState = {
    email: "",
    password: "",
    user_name: "",
  };
  const [inputs, setInputs] = useState(initialStates);
  const [errors, setError] = useState(errorsState);

  useEffect(() => {
    const data = localStorage.getItem("token");
    if (data) {
      props.history.push("/dashboard");
    }
  }, []);

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

  const signupSubmit = (e) => {
    e.preventDefault();
    loginFormSchema
      .validate(
        {
          email: inputs.email,
          password: inputs.password,
          user_name: inputs.user_name,
        },
        { abortEarly: false }
      )
      .then(
        props.signupRequest({
          email: inputs.email,
          password: inputs.password,
          user_name: inputs.user_name,
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
                  <Form onSubmit={signupSubmit}>
                    <Form.Group controlId="formBasicUserName">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="user_name"
                        value={inputs.user_name || ""}
                        placeholder="Enter Username"
                        onChange={handleChange}
                      />
                      <p className="text-danger">{errors.user_name}</p>
                    </Form.Group>
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
                      onClick={signupSubmit}
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
  signupRequest: (data) => {
    dispatch(signupRequest(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
