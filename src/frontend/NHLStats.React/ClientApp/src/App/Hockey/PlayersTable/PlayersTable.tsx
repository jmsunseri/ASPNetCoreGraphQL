import React, { useState } from "react";
import PlayersTableRow from "./PlayersTableRow/PlayersTableRow";
import Pager from "./Pager/Pager";
import usePlayers from "../../../Hooks/usePlayers";
import { apolloClients } from "../../App";
import { Player } from "../../../Models/Player";
import PlayerModal from "./PlayerModal/PlayerModal";
import Grid, { Row, Cell } from "@fv-components/layout-grid";
import Fab from "@fv-components/fab";
import MaterialIcon from "@fv-components/material-icon";

interface PlayersTableProps {
  filter: string;
}

const PlayersTable: React.FC<PlayersTableProps> = (
  props: PlayersTableProps
) => {
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [pageSize, setPageSize] = useState(3);
  const {
    players,
    totalPages,
    loading,
    error,
    deletePlayer,
    addPlayer
  } = usePlayers({
    pageSize,
    page,
    filter: props.filter,
    client: apolloClients.playerClient
  });

  console.log("player table function called");

  if (!loading && !error) {
    if (page > totalPages) {
      setPage(1);
    }
  }

  const pageSizeChange = (event: any) => {
    setPageSize(event.target.value);
  };

  const pageChange = (event: any) => {
    setPage(event);
  };

  return (
    <>
      <Grid align="right">
        <Row>
          <Cell columns={11}></Cell>
          <Cell columns={1}>
            <Fab
              style={{ position: "absolute", top: "255px" }}
              onClick={() => {
                setShow(true);
              }}
              icon={<MaterialIcon icon="add" />}
            />
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <div
              style={{
                minHeight: "300px"
              }}
            >
              <table style={{ width: "100%" }}>
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
                  {(players ? players : new Array<Player>()).map(player => (
                    <PlayersTableRow
                      key={player.id}
                      id={player.id}
                      name={player.name}
                      birthDate={player.birthDate}
                      birthPlace={player.birthPlace}
                      height={player.height}
                      weight={player.weightLbs}
                      deletePlayer={deletePlayer}
                    ></PlayersTableRow>
                  ))}
                </tbody>
              </table>
            </div>
          </Cell>
        </Row>
      </Grid>
      <Pager
        totalPages={totalPages}
        page={page}
        pageChange={pageChange}
        pageSizeChange={pageSizeChange}
        pageSize={pageSize}
      ></Pager>
      <PlayerModal
        show={show}
        onHide={() => setShow(false)}
        new={true}
        addPlayer={addPlayer}
      ></PlayerModal>
    </>
  );
};

export default PlayersTable;
