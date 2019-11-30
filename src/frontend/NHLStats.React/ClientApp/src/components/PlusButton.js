import React from "react";

const PlusButton = props => {
  return (
    <button
      onClick={() => {
        props.clickHandler(!props.expanded);
      }}
    >
      {props.expanded ? "-" : "+"}
    </button>
  );
};

export default PlusButton;
