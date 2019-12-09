import React, { useState, FC } from "react";
import PlayersTable from "./PlayersTable/PlayersTable";
import TextField, { Input } from "@fv-components/text-field";

import Grid, { Cell, Row } from "@fv-components/layout-grid";
const Hockey: FC = () => {
  const [filter, setFilter] = useState("");

  console.log("hockey function called");

  const filterChange = (event: any) => {
    setFilter(event.currentTarget.value);
  };

  return (
    <>
      <h1 id="tabelLabel">Players</h1>
      <Grid>
        <Row>
          <Cell columns={6}>
            <TextField outlined label="Filter">
              <Input value={filter} onChange={filterChange}></Input>
            </TextField>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <PlayersTable filter={filter} />
          </Cell>
        </Row>
      </Grid>
    </>
  );
};

export default Hockey;
