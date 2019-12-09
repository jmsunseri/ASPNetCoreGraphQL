import React, { FC } from "react";
import Button from "@fv-components/button";
import Select, { Option } from "@fv-components/select";
import Grid, { Cell, Row } from "@fv-components/layout-grid";

interface PagerProps {
  pageSizeChange: (event: any) => void;
  pageSize: number;
  totalPages: number;
  page: number;
  pageChange: (page: number) => void;
}

const Pager: FC<PagerProps> = (props: PagerProps) => {
  console.log("pager function");

  return (
    <Grid>
      <Row>
        <Cell>
          <Select
            outlined
            label="PageSize"
            onChange={props.pageSizeChange}
            value={props.pageSize.toString()}
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
          </Select>
        </Cell>
        <Cell>
          {Array.from(Array(props.totalPages).keys()).map((i: number) => (
            <Button
              key={i + 1}
              outlined={i + 1 === props.page}
              onClick={() => props.pageChange(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
        </Cell>
      </Row>
    </Grid>
  );
};

export default Pager;
