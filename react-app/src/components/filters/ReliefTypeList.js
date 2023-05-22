import React, { useContext} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";

function ReliefTypeList() {
  const { stamp } = useContext(Context);

  return (
    <>
      <ListGroup>
        {stamp.reliefs.map((relief) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={relief === stamp.selectedRelief}
            onClick={() => {
              if (relief === stamp.selectedRelief) {
                stamp.setSelectedRelief(null);
              } else {
                stamp.setSelectedRelief(relief);
              }
            }}
            key={relief}
            variant="dark"
          >
            {relief}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
export default observer(ReliefTypeList);