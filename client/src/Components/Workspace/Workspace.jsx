import React, { Component } from "react";
import axios from "axios";
class Workspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
      isloaded: false
    };
  }
  componentDidMount() {
    axios
      .get("https://nut-case.s3.amazonaws.com/coursessc.json")
      .then(response => response.json())
      .then(data =>
        this.setState({
          res: data,
          isloaded: true
        })
      )
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { isloaded, res } = this.state;
    if (!isloaded) {
      return <div>Loading...</div>;
    }
    else{
    return (
      <div>
        <h1>hi</h1>
      </div>
    );
  }
}
}

export default Workspace;
