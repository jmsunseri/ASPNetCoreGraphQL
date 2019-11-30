import React from "react";
import PlayersTable from "./PlayersTable";

const Hockey = () => {
  return (
    <div>
      <h1 id="tabelLabel">Players</h1>
      <p>This component demonstrates fetching data from the server.</p>
      <PlayersTable />
    </div>
  );
};

export default Hockey;
