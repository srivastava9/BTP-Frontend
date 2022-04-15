import React from "react";
import "./index.css";
function TopNavBar(props) {
  return (
    <div className='topNavBar'>
      <div className='navbartext'>{props.screenName}</div>
    </div>
  );
}

export default TopNavBar;
