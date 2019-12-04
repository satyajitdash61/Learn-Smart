import React, { Component } from "react";
import axios from "axios";
class Workspace extends Component {
  state = {
    Length: ""
  };
  componentDidMount() {
    axios
      .get("https://nut-case.s3.amazonaws.com/coursessc.json")
      .then(response => response.json())
      .then(data => 
        this.setState({
            Length : data
        })
        )
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const Length = this.state.Length;
    return (
      <div>
        <h1>hi</h1>
        <p>Length : {Length}</p>
      </div>
    );
  }
}

export default Workspace;
