import React from 'react';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { signupRequest } from "../../Redux/Action"
import loginFormSchema from "../../Helper/ValidSchema"

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      user_name:'',
      token: '',
      errors:{
        email:'',
        password:'',
        user_name:'',
      },
    }
  }

  componentDidMount = () => {
    const data = localStorage.getItem("token")
    if (data) {
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
    const { user_name, email, password } = this.state;
    let errors = {
      user_name:'',
      email: '',
      password: '',
    }
    loginFormSchema.validate  ({
      user_name, email, password
    },{ abortEarly: false })
      .then(
        this.setState({
          user_name,
          email,
          password,
        }),
        this.props.signupRequest({ 
          user_name:user_name, 
          email: email, 
          password: password 
        }),
        this.setState({
          errors:''
        })
      ).catch(err => {
        err.inner.forEach(error => {
          errors = { ...errors, [error.path]: error.message };
        });
        this.setState({
          errors
        })
      });
  }

  render() {
    const { email, password ,user_name,errors } = this.state;
  
    return (
      <>
        <Container>
          <div className={"about-warp mb-5"}>
            <h1 className={"text-center pt-4 pb-4"}>Sign Up</h1>
            <Row className={"justify-content-center"}>
              <Col md={6} sm={6}>
                <Card>
                  <Card.Body>
                    {/* <Card.Title className={"text-center"}>{aboutBlock.firstBlock.title}</Card.Title> */}
                    <Form>
                      <Form.Group controlId="formBasicUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="user_name"
                          value={user_name}
                          placeholder="Enter Username"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                      <p className="text-danger">{errors.user_name}</p>
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
                      <p className="text-danger">{errors.email}</p>
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
                      <p className="text-danger">{errors.password}</p>
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
  signupRequest: data => {
    dispatch(signupRequest(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);