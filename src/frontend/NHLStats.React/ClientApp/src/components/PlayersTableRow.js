import React, { useState } from "react";
import PlusButton from "./PlusButton";
import CareerStateTable from "./CareerStatsTable";

const PlayersTableRow = props => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr>
        <td>
          <PlusButton
            clickHandler={setExpanded}
            expanded={expanded}
          ></PlusButton>
        </td>
        <td>{props.name}</td>
        <td>{props.birthDate}</td>
        <td>{props.birthPlace}</td>
        <td>{props.height}</td>
        <td>{props.weight}</td>
      </tr>
      {expanded ? (
        <tr style={{ backgroundColor: "white" }}>
          <td
            colSpan="6"
            style={{
              paddingRight: "0px",
              paddingLeft: "25px",
              paddingTop: "0px",
              paddingBottom: "0px"
            }}
          >
            <CareerStateTable id={props.id} />
          </td>
        </tr>
      ) : null}
    </>
  );
};

export default PlayersTableRow;
