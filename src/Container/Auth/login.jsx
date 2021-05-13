import React from 'react';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { loginRequest } from "../../Redux/Action"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: ''
    }
  }

  componentDidMount = () => {
    const data = localStorage.getItem("token")
    if (data ) {
      this.props.history.push('/dashboard')
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.setState({
      email,
      password,
    })
    this.props.loginRequest({ email: email, password: password })

  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <Container>
          <div className={"about-warp mb-5"}>
            <h1 className={"text-center pt-4 pb-4"}>Login</h1>
            <Row className={"justify-content-center"}>
              <Col md={6} sm={6}>
                <Card>
                  <Card.Body>
                    {/* <Card.Title className={"text-center"}>{aboutBlock.firstBlock.title}</Card.Title> */}
                    <Form>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="text"
                          name="email"
                          value={email}
                          placeholder="Enter Email"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="text"
                          name="password"
                          value={password}
                          placeholder="Enter password"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit" onClick={this.submitForm}>
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
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loginRequest: data => {
    dispatch(loginRequest(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);