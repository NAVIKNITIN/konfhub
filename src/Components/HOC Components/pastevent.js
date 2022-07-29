import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
const PastEvents = ({setPastEvents}) => {
 
  return (
    <div className="" style={{padding:"0rem 1rem"}}>
      <h3 className="mt-2">Past Events</h3>
      <div className="p-2 m-2 ">
      <Dropdown style={{border: '1px solid lightgray',borderRadius: "0.4rem",marginTop:"8px"}}>
      <Dropdown.Toggle variant="" id="dropdown-basic" >
        Select Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={e=>setPastEvents(true)}>true</Dropdown.Item>
        <Dropdown.Item onClick={e=>setPastEvents(false)}>false</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
    </div>
  );
};

export default PastEvents;
