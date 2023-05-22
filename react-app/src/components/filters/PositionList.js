import React, { useContext,useEffect } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";
import { fetchPositions } from '../../http/stampAPI';

function PositionList() {
  const { stamp } = useContext(Context);
  // useEffect(() => {
  //   fetchPositions().then(data => stamp.setPositions(data));
  // }, []);

  return (
    <>
      <ListGroup>
        {stamp.positions.map((position) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={position === stamp.selectedPosition}
            onClick={() => {
              if (position === stamp.selectedPosition) {
                stamp.setSelectedPosition(null);
              } else {
                stamp.setSelectedPosition(position);
              }
            }}
            key={position}
            variant="dark"
          >
            {position}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};


export default observer(PositionList);