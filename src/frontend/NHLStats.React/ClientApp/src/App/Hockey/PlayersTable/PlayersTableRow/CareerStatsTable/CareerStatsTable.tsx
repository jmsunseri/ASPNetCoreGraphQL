import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { apolloClients } from "../../../../App";

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

interface CareerStateTableProps {
  id: number;
}

const CareerStateTable: FC<CareerStateTableProps> = (
  props: CareerStateTableProps
) => {
  const { loading, error, data } = useQuery(GET_CAREER_STATS, {
    variables: { id: props.id },
    client: apolloClients.statsClient
  });

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Error :(</p>
  ) : (
    <table style={{ margin: "0px", width: "100%" }}>
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
        {data.playerCareerStats ? (
          <tr key={props.id}>
            <td>{data.playerCareerStats.goals}</td>
            <td>{data.playerCareerStats.assists}</td>
            <td>{data.playerCareerStats.plusMinus}</td>
            <td>{data.playerCareerStats.points}</td>
            <td>{data.playerCareerStats.gamesPlayed}</td>
            <td>{data.playerCareerStats.penaltyMinutes}</td>
          </tr>
        ) : (
          <tr key={props.id}>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CareerStateTable;
