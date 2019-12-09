import React, { useState, FC } from "react";
import CareerStateTable from "./CareerStatsTable/CareerStatsTable";
import IconButton from "@fv-components/icon-button";
import MaterialIcon from "@fv-components/material-icon";

interface PlayerTableRowProps {
  deletePlayer: (id: number) => void;
  name: string;
  birthDate: string;
  birthPlace: string;
  height: string;
  weight: number;
  id: number;
}

const PlayersTableRow: FC<PlayerTableRowProps> = (
  props: PlayerTableRowProps
) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <tr>
        <td>
          <IconButton onClick={() => setExpanded(!expanded)}>
            {!expanded ? (
              <MaterialIcon icon="add" />
            ) : (
              <MaterialIcon icon="remove" />
            )}
          </IconButton>
        </td>
        <td>{props.name}</td>
        <td>{props.birthDate}</td>
        <td>{props.birthPlace}</td>
        <td>{props.height}</td>
        <td>{props.weight}</td>
        <td>
          <IconButton
            onClick={() => {
              props.deletePlayer(props.id);
            }}
          >
            <MaterialIcon icon="delete" />
          </IconButton>
        </td>
      </tr>
      {expanded ? (
        <tr style={{ backgroundColor: "white" }}>
          <td></td>
          <td
            colSpan={6}
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
