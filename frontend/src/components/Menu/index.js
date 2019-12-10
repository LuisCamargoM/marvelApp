import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import ShoppingCart from "@material-ui/icons/ShoppingCart";

const Menu = () => {
  return (
    <div className="MenuHome">
      <Row xs={12} style={{ margin: "0px", padding: "0px" }}>
        <Col xs="6">
          <Link to="/home">
            <h1 className="Title">MARVEL STORE</h1>
          </Link>
        </Col>
        <Col xs={6}>
          <Link to="/cart">
            <ShoppingCart className="Cart"/>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Menu;
