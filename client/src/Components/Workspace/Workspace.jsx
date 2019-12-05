// importing React and Component from react
import React, { Component } from "react";
// adding css file
import "./Workspace.css";
// adding loading time gif
import loadingGIF from "../../Images/preview.gif";
// adding card from bootstrap card
import Card from "react-bootstrap/Card";
// adding Button from bootstrap Button
import Button from "react-bootstrap/Button";
// adding Nav from bootstrap Nav
import Nav from "react-bootstrap/Nav";
// adding Navbar from bootstrap Navbar
import Navbar from "react-bootstrap/Navbar";
// adding Form from bootstrap Form
import Form from "react-bootstrap/Form";
// adding FormControl from bootstrap FormControl
import FormControl from "react-bootstrap/FormControl";

// creating class workspace extending from Component
class Workspace extends Component {

  // creating constructor
  constructor(props) {
    // calling parent constructor
    super(props);
    // creating state
    this.state = {
      // adding objects
      res: [],
      total: "",
      finalres : "",
      field : "",
      isloaded: false
    };
  }
  // during loading of dom and updating the state
  componentDidMount() {
    // fetching the endpoint json
    fetch("https://nut-case.s3.amazonaws.com/coursessc.json")
      .then(response => response.json())
      .then(value => {
        this.setState({
          isloaded: true,
          finalres:value,
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
    console.log(result);
    const res = this.state.finalres;
    console.log("hi");
    console.log(this.state.finalres);
    
    if(result===''){
      this.setState({
        isloaded : true,
        res : this.state.finalres,
        total : this.state.finalres.length
      })
    }
    else{
    const updatedResult = res.filter((res)=>res["Child Subject"]===result)
    // console.log(updatedResult);
    this.setState({
      isloaded : true,
      res : updatedResult,
      total : updatedResult.length
    })
  }
    
  }
  render() {
    const { isloaded, finalres, res, total, field} = this.state;
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
                placeholder="Search Course"
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
            <p>Courses Found : {total}</p>
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
