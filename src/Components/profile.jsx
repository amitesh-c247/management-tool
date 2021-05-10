import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import moment from "moment";

const ProfileComponent = (props) => {

  const [dataValue, setDatavalue] = useState({})

  useEffect(() => {
    const { data } = props
    if (data) {
      setDatavalue(data)
    }
  }, [])

  const { email, firstName, lastName, address, dob } = dataValue
  
  return (
    <>

          <h1 className={"text-center pt-4 pb-4"}>User Profile</h1>
              <Card className={"mb-4"}>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" value={email} placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group >
                      <Form.Label>First name</Form.Label>
                      <Form.Control value={firstName} type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group >
                      <Form.Label>Last name</Form.Label>
                      <Form.Control value={lastName} type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group >
                      <Form.Label>Address</Form.Label>
                      <Form.Control value={address} type="text" placeholder="Address" />
                    </Form.Group>
                    <Form.Group >
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control value={moment(dob).format("YYYY-MM-DD")} /* onChange={(e) => handleDateChange(e)} */ type="date" placeholder="Address" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Update Profile
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
    </>
  );
}

export default ProfileComponent;