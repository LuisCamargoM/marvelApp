import React, { Component } from "react";

import { Form, FormGroup, Input, Button } from "reactstrap";
// import Header from "../../components/Header";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      message: "",
      email: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signIn = e => {
    e.preventDefault();
    const { email, password } = this.state;

    const session = {
      email,
      password
    };

    axios
      .post("http://localhost:3333/login", session)
      .then(response => {
        this.setState({ success: true });
        this.setState({ message: "Signing In.." });

        const { token } = response.data;
        localStorage.setItem("token", token);
        this.props.history.push("/home");
        return;
      })
      .then(token => token)
      .catch(err => {
        console.log(err);
        this.setState({ message: "Invalid LogIn.." });
      });
  };

  render() {
    return (
      <div className="Container">
        <div className="Login">
          <div className="Logo col-md-6">
              {/* css */}
          </div>
          <div className="Form col-md-6 float-right">
            <div className="Header">
              <h1 className="title_g">MARVEL</h1>
              <h2 className="title_s">STORE</h2>
            </div>
            <div className="Body">
              <Form onSubmit={this.signIn} className="loginForm">
                <FormGroup>
                  <Input
                    className="inputLogin"
                    type="email"
                    id="email"
                    name="email"
                    onChange={this.handleInputChange}
                    placeholder="Email"
                  />
                  
                </FormGroup>
                <FormGroup>
                  <Input
                    className="inputLogin"
                    type="password"
                    id="password"
                    name="password"
                    onChange={this.handleInputChange}
                    placeholder="Password"
                  />
                </FormGroup>
                <FormGroup>
                  <Button className="brk-btn" outline color="danger" type="submit">
                    LOGIN
                  </Button>
                </FormGroup>                            
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
