import React, { useState } from "react";
import PlayersTable from "./PlayersTable";
import usePlayers from "./usePlayers";

const Hockey = () => {
  const [filter, setFilter] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const { loading, error, data } = usePlayers({
    pageSize,
    page,
    setPage,
    filter
  });

  const filterChange = event => {
    setPage(1);
    setFilter(event.target.value);
  };

  const pageChange = event => {
    setPageSize(event.target.value);
  };

  return (
    <div>
      <h1 id="tabelLabel">Players</h1>
      <p>This component demonstrates fetching data from the server.</p>
      Filter: <input onChange={filterChange}></input>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error :(</p>
      ) : (
        <>
          <PlayersTable players={data.playersList.players} />
          <div
            style={{
              flexDirection: "row",
              display: "flex"
            }}
          >
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
              {"<-"}
            </button>
            <div style={{ marginLeft: "15px" }}>{page}</div>
            <button
              style={{ marginLeft: "15px" }}
              disabled={page === data.playersList.totalPages}
              onClick={() => setPage(page + 1)}
            >
              {"->"}
            </button>
            <select
              style={{ marginLeft: "15px" }}
              onChange={pageChange}
              value={pageSize}
            >
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default Hockey;
