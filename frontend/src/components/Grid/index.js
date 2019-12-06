import React from "react";
import {
  Col,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  InputGroup, InputGroupAddon,
  Input,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";

import deadpool1 from "../../img/comic1.jpeg";
import deadpool2 from "../../img/comic2.jpeg";
import deadpool3 from "../../img/comic3.jpeg";
import deadpool4 from "../../img/comic4.jpg";
import deadpool5 from "../../img/comic5.jpg";

import { FormGroup } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const Grid = props => {
  return (
    <div>
      <FormGroup className="searchForm">
        <InputGroup>
          <Input placeholder="Find your favorite Commic Storie"/>
          <InputGroupAddon addonType="append">
            <Button color="danger">
              <SearchIcon/>
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <br />
      </FormGroup>
      <CardGroup className="Group">
        <Col xs="3">
          <Card className="flip-card">
            <CardBody className="flip-card-inner">
              <div className="flip-card-front">
                <img src={deadpool1} alt="Logo" />
              </div>
              <div className="flip-card-back">
                <h4 className="cardTitle">DESCRIÇAO</h4>
                <div className="col-12 float-right text">
                  <p className="cardDesc">
                    Deadpool is a film for the fans. The fans who wanted him just
                    as lewd and crude in celluloid as he is in the comics, who
                    suffered through both his and Reynolds' mistreatment in films
                    past, and who flung desperate tweets 'round the internet when
                    they heard that maybe, just maybe, they might get a loyal
                    depiction if they begged hard enough.
                  </p>
                </div>
                <button className="addToCart"> + ADD TO CART</button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3">
          <Card className="flip-card">
            <CardBody className="flip-card-inner">
              <div className="flip-card-front">
                <img src={deadpool2} alt="Logo" />
              </div>
              <div className="flip-card-back">
                <h4 className="cardTitle">DESCRIÇAO</h4>
                <div className="col-12 float-right text">
                  <p className="cardDesc">
                    Deadpool is a film for the fans. The fans who wanted him just
                    as lewd and crude in celluloid as he is in the comics, who
                    suffered through both his and Reynolds' mistreatment in films
                    past, and who flung desperate tweets 'round the internet when
                    they heard that maybe, just maybe, they might get a loyal
                    depiction if they begged hard enough.
                  </p>
                </div>
                <button className="addToCart"> + ADD TO CART</button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3">
          <Card className="flip-card">
            <CardBody className="flip-card-inner">
              <div className="flip-card-front">
                <img src={deadpool3} alt="Logo" />
              </div>
              <div className="flip-card-back">
                <h4 className="cardTitle">DESCRIÇAO</h4>
                <div className="col-12 float-right text">
                  <p className="cardDesc">
                    Deadpool is a film for the fans. The fans who wanted him just
                    as lewd and crude in celluloid as he is in the comics, who
                    suffered through both his and Reynolds' mistreatment in films
                    past, and who flung desperate tweets 'round the internet when
                    they heard that maybe, just maybe, they might get a loyal
                    depiction if they begged hard enough.
                  </p>
                </div>
                <button className="addToCart"> + ADD TO CART</button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3">
          <Card className="flip-card">
            <CardBody className="flip-card-inner">
              <div className="flip-card-front">
                <img src={deadpool4} alt="Logo" />
              </div>
              <div className="flip-card-back">
                <h4 className="cardTitle">DESCRIÇAO</h4>
                <div className="col-12 float-right text">
                  <p className="cardDesc">
                    Deadpool is a film for the fans. The fans who wanted him just
                    as lewd and crude in celluloid as he is in the comics, who
                    suffered through both his and Reynolds' mistreatment in films
                    past, and who flung desperate tweets 'round the internet when
                    they heard that maybe, just maybe, they might get a loyal
                    depiction if they begged hard enough.
                  </p>
                </div>
                <button className="addToCart"> + ADD TO CART</button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3">
          <Card className="flip-card">
            <CardBody className="flip-card-inner">
              <div className="flip-card-front">
                <img src={deadpool5} alt="Logo" />
              </div>
              <div className="flip-card-back"></div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3">
          <Card className="flip-card">
            <CardBody className="flip-card-inner">
              <div className="flip-card-front">
                <img src={deadpool3} alt="Logo" />
              </div>
              <div className="flip-card-back">
                <h4 className="cardTitle">DESCRIÇAO</h4>
                <div className="col-12 float-right text">
                  <p className="cardDesc">
                    Deadpool is a film for the fans. The fans who wanted him just
                    as lewd and crude in celluloid as he is in the comics, who
                    suffered through both his and Reynolds' mistreatment in films
                    past, and who flung desperate tweets 'round the internet when
                    they heard that maybe, just maybe, they might get a loyal
                    depiction if they begged hard enough.
                  </p>
                </div>
                <button className="addToCart"> + ADD TO CART</button>
              </div>
              {/* <CardTitle className="cardTitle" >DESCRIÇAO</CardTitle>
                
                <CardText className="cardDesc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button> */}
            </CardBody>
          </Card>
        </Col>
        <Col xs="3">
          <Card className="flip-card">
            <CardBody className="flip-card-inner">
              <div className="flip-card-front">
                <img src={deadpool2} alt="Logo" />
              </div>
              <div className="flip-card-back">
                <h4 className="cardTitle">DESCRIÇAO</h4>
                <div className="col-12 float-right text">
                  <p className="cardDesc">
                    Deadpool is a film for the fans. The fans who wanted him just
                    as lewd and crude in celluloid as he is in the comics, who
                    suffered through both his and Reynolds' mistreatment in films
                    past, and who flung desperate tweets 'round the internet when
                    they heard that maybe, just maybe, they might get a loyal
                    depiction if they begged hard enough.
                  </p>
                </div>
                <button className="addToCart"> + ADD TO CART</button>
              </div>
              {/* <CardTitle className="cardTitle" >DESCRIÇAO</CardTitle>
                
                <CardText className="cardDesc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button> */}
            </CardBody>
          </Card>
        </Col>
      </CardGroup>
    </div>
  );
};

export default Grid;
