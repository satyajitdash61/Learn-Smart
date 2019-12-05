import React, { Component } from "react";
// import axios from "axios";
import "./Workspace.css";
import loadingGIF from "../../Images/preview.gif";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

class Workspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
      total: "",
      field : "",
      isloaded: false
    };
  }
  componentDidMount() {
    fetch("https://nut-case.s3.amazonaws.com/coursessc.json")
      .then(response => response.json())
      .then(value => {
        this.setState({
          isloaded: true,
          res: value,
          total: value.length
        });
      });
  }
  handelChange = event =>{
    event.preventDefault();
    // const { name, value } = event.target;
    this.setState({
      field : event.target.value
    });
  }
  handleSubmit = event =>{
    const result = this.state.field;
    const res = this.state.res;
    const updatedResult = res.filter((res)=>res["Child Subject"]===result)
    console.log(updatedResult);
    this.setState({
      isloaded : true,
      res : updatedResult,
      total : updatedResult.length
    })
    
    
  }
  render() {
    const { isloaded, res, total, field} = this.state;
    if (!isloaded) {
      return (
        <div className="container-fluid beforeLoading">
          <img src={loadingGIF} alt="" />
        </div>
      );
    } else {
      return (
        <div id="resultScreen">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Learn Smart</Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Form inline>
              <FormControl
                type="search"
                placeholder="Search"
                name="field"
                value={field}
                onChange={this.handelChange}
                className="mr-sm-2"
              />
              <Button variant="outline-info" onClick={this.handleSubmit}>Search</Button>
            </Form>
          </Navbar>
          <br />
          <div id="totalNO">
            <p>Total : {total}</p>
          </div>
          {res.map(res => (
            <Card variant="mr-3">
              <Card.Header as="h3">{res["Course Name"]}</Card.Header>
              <Card.Body>
                <Card.Title>{res["Provider"]}</Card.Title>
                <Card.Text>
                  <p> University : {res["Universities/Institutions"]}</p>
                  <p> Category : {res["Parent Subject"]} </p>
                  <p>Session Starts On : {res["Next Session Date"]}</p>
                </Card.Text>
                <Button variant="outline-dark mr-3" href={res.Url}>
                  Visit Site
                </Button>
                <Button variant="outline-dark" href={res["Video(Url)"]}>
                  Watch Video
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      );
    }
  }
}

export default Workspace;
