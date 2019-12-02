import React from "react";
import { Form, Pagination } from "react-bootstrap";

const Pager = props => {
  return (
    <div className="row">
      <div className="col-xs">
        <div className="row ">
          <div className="col-xs box">
            <Form.Label>Page Size</Form.Label>
          </div>
          <div className="col-xs box">
            <Form.Control
              as="select"
              onChange={props.pageSizeChange}
              value={props.pageSize}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </div>
          <div className="col-xs box"></div>
        </div>
      </div>
      <div className="col-xs box">
        <Pagination>
          {[...Array(props.totalPages).keys()].map(number => (
            <Pagination.Item
              key={number + 1}
              active={number + 1 === props.page}
              onClick={() => props.pageChange(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
      <div className="col-xs"></div>
    </div>
  );
};

export default Pager;
