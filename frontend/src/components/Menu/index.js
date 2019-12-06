import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import ShoppingCart from "@material-ui/icons/ShoppingCart";

export default class Menu extends Component {

  // pegar o token
  // pegar o usuario logado atual
  //pegar o valor do saldo

  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  async componentWillMount() {
    let actual = localStorage.getItem("userBalance");
    if (actual === null || actual === "null") {
      actual = 0;
    } else {
      actual = parseInt(actual);
    }
    this.setState({
      value: actual
    });
  }
  render() {
    return (
      <div className="MenuHome">
        <Row xs="12" style={{margin:'0px',padding:'0px'}}>
          <Col xs="6">
            <Link to="/home">
              <h1 className="Title">MARVEL STORE</h1>
            </Link>
          </Col>
          <Col xs="6">
              <Link to="/cart">
              <ShoppingCart className="Cart"/>
              </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
