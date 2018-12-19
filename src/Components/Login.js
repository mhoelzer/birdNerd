import React, { Component } from "react";
import { Button, Form, Header, Message } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            
          <div className="login" style={{ margin: "auto", width: '50%'}}>
          <br></br>
            <Header className="header" as="h2">
              Sign In
            </Header>
            <Form size="small">
              <Form.Field width="6">
              
                <input className='input' placeholder='Username' required autoFocus />
              </Form.Field>
              <Form.Field width="6">
              
                <input className='input' placeholder='Password' type="password" required  />
              </Form.Field>
              <Button className='submit-button' type='submit' >Submit</Button>
            </Form>
            
            
              <Message className="message" size="small">
                Not a member?
                <Link className="link" to="/Register">
                  {" "}
                  Sign up
                </Link>
              </Message>
            
          </div>
        );
      }
    }


    export default Login