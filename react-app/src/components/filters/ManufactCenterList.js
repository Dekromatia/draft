import React, { useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";
// import Dropdown from 'react-bootstrap/Dropdown';

import { Context } from '../../index';

const ManufactCenterList = observer(() => {
  const { stamp } = useContext(Context);

  return (
    <div style={{ height: '225px', overflow: 'scroll' }}>
      <ListGroup>
        {stamp.manufacts.map((manufact) => (
          <ListGroup.Item
            style={{ cursor: 'pointer' }}
            className={manufact.id === stamp.selectedManufact?.id ? "active" : ""}
            // onClick={() => stamp.setSelectedManufact(manufact)}
            onClick={() => {
              if (manufact === stamp.selectedManufact) {
                stamp.setSelectedManufact(null);
              } else {
                stamp.setSelectedManufact(manufact);
              }
          }}
            key={manufact.id}
            variant="dark"
          >
            {manufact.manufact_center}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
});

export default ManufactCenterList;


      {/* <Dropdown>
        <Dropdown.Toggle variant="secondary" id="manufact-dropdown">
          Центр производства
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {stamp.manufacts.map((manufact) => (
            <Dropdown.Item
              key={manufact.id}
              active={manufact.id === stamp.selectedManufact?.id}
              onClick={() => stamp.setSelectedManufact(manufact)}
            >
              {manufact.manufact_center}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown> */}