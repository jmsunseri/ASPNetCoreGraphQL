import React from "react";
import PlayersTableRow from "./PlayersTableRow";

const PlayersTable = props => {
  return (
    <table className="table table-striped" aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Birthday</th>
          <th>Birth Place</th>
          <th>Height</th>
          <th>Weight (Lbs)</th>
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
          ></PlayersTableRow>
        ))}
      </tbody>
    </table>
  );
};

export default PlayersTable;
