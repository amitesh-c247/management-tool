import React from 'react';
import {Card, Row , Col, Container,Form, Button} from 'react-bootstrap';



class ContactComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName : "",
            email: "",
            phone: "",
            comment:""
        }
    }

    handleChange = (e)=>{
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    submitForm =(e)=>{
        e.preventDefault();
        const {fullName, email, phone ,comment} = this.state;
        alert(fullName,"fullName",email,"email",phone,"phone",comment,"comment")
    }

    render() {
        const {fullName, email, phone ,comment} = this.state;
       
      return (
          <>
            <Container>
             <div className={"about-warp mb-5"}>
                 <h1 className={"text-center pt-4 pb-4"}>Contact Us</h1>
                <Row className={"justify-content-center"}>
                    <Col md={6} sm={6}>
                        <Card>
                            <Card.Body>
                                {/* <Card.Title className={"text-center"}>{aboutBlock.firstBlock.title}</Card.Title> */}
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="fullName" 
                                            value={fullName} 
                                            placeholder="Enter email" 
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="email" 
                                            value={email}
                                            placeholder="Email" 
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="phone" 
                                            value={phone}
                                            placeholder="Phone" 
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="comment" 
                                            value={comment}
                                            placeholder="Comment" 
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
                    <Col md={6} sm={6}>
                        <h3>{fullName}</h3>
                        <h3>{email}</h3>
                        <h3>{phone}</h3>
                        <h3>{comment}</h3>
                    </Col>
                </Row>
             </div>
            </Container>
          </>
      );
    }
}

export default ContactComponents;