import React,{useState} from 'react'
import {Form,Button, Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';


export default function Resetpassword() {

  const [identifier,setIdentifier]= useState('');


let login=()=>{



    // Request API.
    axios
      .post('http://localhost:1337/api/auth/forgot-password', {
        email: identifier, // user's email
      })
      .then((response) => {
        console.log('Your user received an email');
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
    
}
  
  return (
    <Container>
    <Row>
    <Col xs={{offset:3 , span:6}}>
    <Form>
    <h1>Resetpassword System</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="identifier" onChange={(e)=>{setIdentifier(e.target.value)}} placeholder="Enter email" />
           
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
