import React, { useState } from "react";
import PlayersTable from "./PlayersTable/PlayersTable";
import usePlayers from "../../hooks/usePlayers";
import { Form, Button } from "react-bootstrap";
import Pager from "./Pager/Pager";
import PlayerModal from "./PlayerModal/PlayerModal";
import { apolloClients } from "../App";

const Hockey = () => {
  const [filter, setFilter] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [show, setShow] = useState(false);
  const [players, setPlayers] = useState(null);
  const { loading, error, data } = usePlayers({
    pageSize,
    page,
    setPage,
    filter,
    client: apolloClients.playerClient
  });

  // I feel like there must be a better way to do this
  // this having to setPlayers to null is causing my grid to flicker
  if (loading && players) {
    setPlayers(null);
  } else if (
    !players &&
    !loading &&
    !error &&
    data &&
    data.playersList &&
    data.playersList.players
  ) {
    setPlayers(data.playersList.players);
  }

  // console.log({ loading, error, data });

  const filterChange = event => {
    setPlayers(null);
    setPage(1);
    setFilter(event.target.value);
  };

  const pageSizeChange = event => {
    setPlayers(null);
    setPageSize(event.target.value);
  };

  const pageChange = event => {
    setPlayers(null);
    setPage(event);
  };

  const onDelete = id => {
    setPlayers(players.filter(x => x.id !== id));
  };

  const onAdd = player => {
    setPlayers(players.concat(player));
  };

  return (
    <>
      <h1 id="tabelLabel">Players</h1>
      <div className="row" style={{ marginBottom: "10px" }}>
        <div className="col-xs box">
          <Form.Control
            type="text"
            placeholder="Filter"
            onChange={filterChange}
          />
        </div>
        <div className="col-xs box"></div>
        <div className="col-xs box">
          <div className="row end-xs">
            <Button variant="primary" onClick={() => setShow(true)}>
              Add New Player
            </Button>
            <PlayerModal
              show={show}
              onHide={() => setShow(false)}
              new={true}
              onAdd={onAdd}
            ></PlayerModal>
          </div>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error :(</p>
      ) : (
        <>
          <PlayersTable players={players} onDelete={onDelete} />
          <Pager
            totalPages={data.playersList.totalPages}
            page={page}
            pageChange={pageChange}
            pageSizeChange={pageSizeChange}
            pageSize={pageSize}
          ></Pager>
        </>
      )}
    </>
  );
};

export default Hockey;
