import React, { Component } from "react";
// import axios from "axios";
import "./Workspace.css";
import loadingGIF from "../../Images/preview.gif";
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
            <React.Fragment>
              <p>{res["Course Id"]}</p>
              <p>{res["Course Name"]}</p>
            </React.Fragment>
          ))}
        </div>
      );
    }
  }
}

export default Workspace;
