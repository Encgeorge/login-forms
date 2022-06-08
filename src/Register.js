import React, { useState } from 'react'
import {Form,Button, Container, Row, Col} from 'react-bootstrap';
import Login from './login';
import Test from './test';
import axios from 'axios';

export default function Register() {

    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const [email,setEmail]= useState('');




    let submitData=()=>{
        axios
        .post('http://localhost:1337/api/auth/local/register', {
          username: username,
          email: email,
          password: password,
        })
        .then((response) => {
          // Handle success.
          console.log('Well done!');
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);
        })
        .catch((error) => {
          // Handle error.
          console.log('An error occurred:', error.response);
        });
      
    }

  return (

    <Container>
    <Row>
    <Col xs={{offset:3 , span:6}}>
    <h1>Register system</h1>
    <Form>

    <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name =" username" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" />
           
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
        </Form.Group>
       
        <Button variant="primary" type="button" onClick={()=>{submitData()}}>
            Submit
        </Button>
        </Form>
        </Col>
</Row>
 <Test/>
 <Login/>
</Container>

    
  )
}
