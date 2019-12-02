import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Table } from "react-bootstrap";

const GET_CAREER_STATS = gql`
  query($id: Int) {
    playerCareerStats(id: $id) {
      plusMinus
      assists
      gamesPlayed
      goals
      penaltyMinutes
      points
    }
  }
`;

const CareerStateTable = props => {
  const { loading, error, data } = useQuery(GET_CAREER_STATS, {
    variables: { id: props.id }
  });

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Error :(</p>
  ) : (
    <Table style={{ margin: "0px" }} size="sm" borderless>
      <thead>
        <tr style={{ backgroundColor: "white" }}>
          <th>Goals</th>
          <th>Assists</th>
          <th>Plus Minus</th>
          <th>Points</th>
          <th>Games Played</th>
          <th>Penalty Minutes</th>
        </tr>
      </thead>
      <tbody>
        <tr key={props.id}>
          <td>{data.playerCareerStats.goals}</td>
          <td>{data.playerCareerStats.assists}</td>
          <td>{data.playerCareerStats.plusMinus}</td>
          <td>{data.playerCareerStats.points}</td>
          <td>{data.playerCareerStats.gamesPlayed}</td>
          <td>{data.playerCareerStats.penaltyMinutes}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CareerStateTable;
