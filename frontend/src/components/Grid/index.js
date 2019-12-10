import React, { Component } from "react";
import {
  Col,
  Card,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  CardGroup,
  CardBody,
  Pagination,
  Form
} from "reactstrap";

import { FormGroup } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import axios from "axios";
import { connect } from "react-redux";

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      search: "",
      comics: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchApi = async e => {
    e.preventDefault();
    this.setState({
      status: false
    });

    const { search } = this.state;
    const session = {
      search
    };

    const comic = await axios
      .post("http://localhost:3333/api/comics", session)
      .then(response => {
        return response.data;
      });

    const { results } = comic.data;

    this.setState({
      comics: results,
      status: true
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.searchApi}>
          <FormGroup className="searchForm">
            <InputGroup>
              <Input
                type="text"
                placeholder="Find your favorite Commic Story"
                name="search"
                id="search"
                onChange={this.handleInputChange}
              />
              <InputGroupAddon addonType="append">
                <Button color="danger" type="submit">
                  {this.state.status === false && this.state.search ? (
                    <div className="animate-flicker">
                      <SearchIcon />
                    </div>
                  ) : (
                    <div>Search</div>
                  )}
                </Button>
              </InputGroupAddon>
            </InputGroup>
            <br />
          </FormGroup>
        </Form>
        {this.state.comics ? (
          <CardGroup className="Group">
            {this.state.comics.map(comic => (
              <Col xs="3" key={comic.id}>
                <Card className="flip-card">
                  <CardBody className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        alt="Logo"
                      />
                    </div>
                    <div className="flip-card-back">
                      {comic.description ? (
                        <div>
                          <h4 className="cardTitle">DESCRICAO</h4>
                          <div className="col-12 float-right text">
                            <p className="cardDesc">{comic.description}</p>
                          </div>
                          <button className="addToCart"> + ADD TO CART</button>
                        </div>
                      ) : (
                        <div className="col-centered">
                          <h3>No Description available</h3>
                        </div>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </CardGroup>
        ) : (
          ""
        )}
      </div>
    );
  }
}
