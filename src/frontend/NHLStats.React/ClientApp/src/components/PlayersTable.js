import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import PlayersTableRow from "./PlayersTableRow";

const GET_ALL_PLAYERS = gql`
  {
    players {
      id
      name
      birthDate
      birthPlace
      height
      weightLbs
    }
  }
`;

const PlayersTable = () => {
  const { loading, error, data } = useQuery(GET_ALL_PLAYERS);

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Error :(</p>
  ) : (
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
        {data.players.map(player => (
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
