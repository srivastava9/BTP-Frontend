import React, { Component } from "react";
import TopNavBar from "../../components/topNav";

class EmployeeRecordsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TopNavBar screenName="Employee's Records" />
      </div>
    );
  }
}

export default EmployeeRecordsScreen;
