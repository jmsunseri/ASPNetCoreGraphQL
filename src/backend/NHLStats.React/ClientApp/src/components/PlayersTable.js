import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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
          <th>Name</th>
          <th>Birthday</th>
          <th>Birth Place</th>
          <th>Height</th>
          <th>Weight (Lbs)</th>
        </tr>
      </thead>
      <tbody>
        {data.players.map(player => (
          <tr key={player.id}>
            <td>{player.name}</td>
            <td>{player.birthDate}</td>
            <td>{player.birthPlace}</td>
            <td>{player.height}</td>
            <td>{player.weightLbs}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayersTable;
