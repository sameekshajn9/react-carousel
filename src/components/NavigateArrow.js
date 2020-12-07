import React from "react";
import "font-awesome/css/font-awesome.min.css";

const NavigationArrow = (props) => {
  const {
    leftIconName = "fa fa-angle-left fa-3x",
    isLeft,
    rightIconName = "fa fa-angle-right fa-3x",
    action,
  } = props;

  return (
    <div className="backArrow" onClick={action}>
      <i
        className={isLeft ? leftIconName : rightIconName}
        aria-hidden="true"
      ></i>
    </div>
  );
};

export default NavigationArrow;
