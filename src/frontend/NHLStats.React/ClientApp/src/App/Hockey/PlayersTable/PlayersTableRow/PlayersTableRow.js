import React, { useState } from "react";
import PlusButton from "./PlusButton/PlusButton";
import CareerStateTable from "./CareerStatsTable/CareerStatsTable";
import { Button } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { apolloClients } from "../../../App";

const PlayersTableRow = props => {
  const [expanded, setExpanded] = useState(false);

  const DELETE_PLAYER = gql`
    mutation PlayerMutation($id: Int!) {
      deletePlayer(id: $id)
    }
  `;

  const deletePlayer = id => {
    delPlayer({ variables: { id } }).then(() => {
      props.onDelete(id);
    });
  };

  const [delPlayer, { data }] = useMutation(DELETE_PLAYER, {
    client: apolloClients.playerClient
  });

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
        <td>
          <Button
            variant="outline-primary"
            onClick={() => {
              deletePlayer(props.id);
            }}
          >
            <i className="far fa-trash-alt"></i>
          </Button>
        </td>
      </tr>
      {expanded ? (
        <tr style={{ backgroundColor: "white" }}>
          <td></td>
          <td
            colSpan="6"
            style={{
              padding: "0px"
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
