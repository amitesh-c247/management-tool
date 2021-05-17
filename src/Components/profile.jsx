import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import moment from "moment";
import { connect } from "react-redux";
import { addprofileRequest } from "../Redux/Action"
import {profileFormSchema} from "../Helper/ValidSchema"
const ProfileComponent = (props) => {

  const initialStates = {
    firstName:'', 
    lastName:'',
    email:'', 
    contact_number:'', 
    address:'', 
    dob:moment().locale('en').format("YYYY-MM-DD"),
  }
  const errorsState = {
      firstName:'', 
      email:'', 
      contact_number:'', 
      address:'', 
  }
  const [inputs,setInputs] = useState(initialStates);
  const [errors,setError] = useState(errorsState);

  useEffect(() => {

  }, [])

  const handleChange = (e)=>{
    setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
    });
    setError({
      ...errors,
      [e.target.name]:''
    });
  }

  const addProfile = (e)=>{
    e.preventDefault();
    profileFormSchema.validate({
      firstName:inputs.firstName, 
      email:inputs.email, 
      contact_number:inputs.contact_number, 
      address:inputs.address, 
    },{ abortEarly: false })
      .then(()=>props.addprofileRequest({
          firstName:inputs.firstName, 
          lastName:inputs.lastName,
          email:inputs.email, 
          contact_number:inputs.contact_number, 
          address:inputs.address, 
          dob:inputs.dob,
        }),
          setInputs({
          ...inputs,
          firstName:'', 
          lastName:'', 
          email:'', 
          contact_number:'', 
          address:'', 
          })
      ).catch(err => {
        let tempErrors={}
        err.inner.forEach(error => {
          tempErrors = {
          ...tempErrors,
          [error.path]: error.message
        }
        });
        setError({
          ...errors,
          ...tempErrors
        })
      }

      );

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
              <p className="text-danger">{errors.firstName}</p>
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
              <p className="text-danger">{errors.email}</p>
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
              <p className="text-danger">{errors.contact_number}</p>
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
              <p className="text-danger">{errors.address}</p>
            </Form.Group>
            <Form.Group >
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control 
                value={inputs.dob} /* onChange={(e) => handleDateChange(e)} */ 
                type="date" 
                name="dob"
                onChange={handleChange}
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


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addprofileRequest: data => {
    dispatch(addprofileRequest(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);
