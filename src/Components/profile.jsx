import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import moment from "moment";
import {profileFormSchema} from "../Helper/ValidSchema"
const ProfileComponent = (props) => {

  const initialStates = {
    firstName:'', 
    lastName:'',
    email:'', 
    contact_number:'', 
    address:'', 
    dob:'',
  }
  const errors = {
      firstName:'', 
      lastName:'',
      email:'', 
      contact_number:'', 
      address:'', 
  }
  const [inputs,setInputs] = useState(initialStates);
  const [error,setError] = useState(errors);

  useEffect(() => {

  }, [])

  const handleChange = (e)=>{
    setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
    });
    console.log(inputs,"eee")
  }

  const addProfile = (e)=>{
    e.preventDefault();
    profileFormSchema.validate({
      firstName:'', 
      lastName:'',
      email:'', 
      contact_number:'', 
      address:'', 
    },{ abortEarly: false })
      .then(
        console.log("Success")
      ).catch(err => {
        err.inner.forEach(error => {
          //errors = { ...errors, [error.path]: error.message };
          console.log(error.message,"errors")
          setError({
            error : error.message
          })
        });
      });

  }
  
  return (
    <>
      <h1 className={"text-center pt-4 pb-4"}>User Profile</h1>
      <Card className={"mb-4"}>
        <Card.Body>
          <Form onSubmit={addProfile}>
            <Form.Group >
              <Form.Label>First name</Form.Label>
              <Form.Control 
                value={inputs.firstName || ''} 
                type="text" 
                placeholder="First Name" 
                name="firstName"
                onChange={handleChange}
              />
              {errors.firstName}
            </Form.Group>
            <Form.Group >
              <Form.Label>Last name</Form.Label>
              <Form.Control 
                value={inputs.lastName || ''} 
                type="text" 
                placeholder="Last Name" 
                name="lastName"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                value={inputs.email || ''} 
                placeholder="Enter email" 
                name="email"
                onChange={handleChange}
              />
              {errors.email}
            </Form.Group>
            <Form.Group >
              <Form.Label>Contact Number</Form.Label>
              <Form.Control 
                value={inputs.contact_number || ''} 
                type="text" 
                placeholder="Contact Number" 
                name="contact_number"
                onChange={handleChange}
              />
              {errors.contact_number}
            </Form.Group>
            <Form.Group >
              <Form.Label>Address</Form.Label>
              <Form.Control 
                value={inputs.address || ''} 
                type="text" 
                placeholder="Address" 
                name="address"
                onChange={handleChange}
              />
              {errors.address}
            </Form.Group>
            <Form.Group >
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control 
                value={moment(inputs.dob).format("YYYY-MM-DD")} /* onChange={(e) => handleDateChange(e)} */ 
                type="date" 
                name="date"
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={addProfile}>
              Update Profile
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProfileComponent;