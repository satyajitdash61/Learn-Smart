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
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          
            {res.map(res => (
              <p key={res["Course Id"]}>{res["Course Id"]}</p>
            ))}
        
        </div>
      );
    }
  }
}

export default Workspace;
