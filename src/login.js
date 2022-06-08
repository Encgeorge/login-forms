import React,{useState} from 'react'
import {Form,Button, Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'react-router-dom';

export default function Login() {

  const [identifier,setIdentifier]= useState('');
  const [password,setPassword]= useState('');

let login=()=>{


  axios
  .post('http://localhost:1337/api/auth/local', {
    identifier: identifier,
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
    <Form>
    <h1>Login System</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="identifier" onChange={(e)=>{setIdentifier(e.target.value)}} placeholder="Enter email" />
           
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
        </Form.Group>
       
        <Button variant="primary" type="button" onClick={()=>{login()}}> 
            Submit
        </Button>
        </Form>
        </Col>
</Row>
</Container>

  )
}
