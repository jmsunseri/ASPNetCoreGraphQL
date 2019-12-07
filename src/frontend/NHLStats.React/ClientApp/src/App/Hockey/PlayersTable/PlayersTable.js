import React from "react";
import PlayersTableRow from "./PlayersTableRow/PlayersTableRow";
import { Table } from "react-bootstrap";

const PlayersTable = props => {
  return (
    <Table striped border="true" hover>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Birthday</th>
          <th>Birth Place</th>
          <th>Height</th>
          <th>Weight (Lbs)</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {(props && props.players ? props.players : []).map(player => (
          <PlayersTableRow
            key={player.id}
            id={player.id}
            name={player.name}
            birthDate={player.birthDate}
            birthPlace={player.birthPlace}
            height={player.height}
            weight={player.weightLbs}
            onDelete={props.onDelete}
          ></PlayersTableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default PlayersTable;
