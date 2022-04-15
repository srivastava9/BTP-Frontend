import React, { Component } from "react";
import "./index.css";
import FaceImg from "../../assets/imgEmpl.png";
class EmployeeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='employeeCard'>
        <div className='faceImg'>
          <img src={FaceImg} alt='Employee' className='imgFace' />
        </div>
        <div className='empName'>Kamlesh Mehra</div>
        <div className='designation'>Furnace expert</div>
        <div className='empNo'>7028017023</div>
      </div>
    );
  }
}

export default EmployeeCard;
