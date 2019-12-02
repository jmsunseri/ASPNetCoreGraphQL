import React from "react";
import { Button } from "react-bootstrap";

const PlusButton = props => {
  return (
    <Button
      variant="outline-primary"
      onClick={() => {
        props.clickHandler(!props.expanded);
      }}
    >
      {props.expanded ? "-" : "+"}
    </Button>
  );
};

export default PlusButton;
