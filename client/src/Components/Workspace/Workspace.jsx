import React, { Component } from "react";
// import axios from "axios";
import "./Workspace.css";
import loadingGIF from "../../Images/preview.gif";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class Workspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
      isloaded: false
    };
  }
  componentDidMount() {
    fetch("https://nut-case.s3.amazonaws.com/coursessc.json")
      .then(response => response.json())
      .then(value => {
        this.setState({
          isloaded: true,
          res: value
        });
      });
  }
  render() {
    const { isloaded, res } = this.state;
    if (!isloaded) {
      return (
        <div className="container-fluid beforeLoading">
          <img src={loadingGIF} alt="" />
        </div>
      );
    } else {
      return (
        <div>
          {res.map(res => (
           <Card>
           <Card.Header>{res["Provider"]}</Card.Header>
           <Card.Body>
             <Card.Title>Special title treatment</Card.Title>
             <Card.Text>
               With supporting text below as a natural lead-in to additional content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card>
          ))}
        </div>
      );
    }
  }
}

export default Workspace;
