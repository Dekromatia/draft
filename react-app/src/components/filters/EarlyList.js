import React, { useContext} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";

function EarlyList() {
  const { stamp } = useContext(Context);

  return (
    <div style={{ height: '225px', overflow: 'scroll' }}>
      <ListGroup>
      {stamp.earlys
        .filter((early) => early !== undefined) // filter out undefined values
        .sort((a, b) => parseInt(b) - parseInt(a)) // sort the array
        .map((early) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={early === stamp.selectedEarly}
            onClick={() => {
              if (early === stamp.selectedEarly) {
                stamp.setSelectedEarly(null);
              } else {
                stamp.setSelectedEarly(early);
              }
            }}
            key={early}
            variant="dark"
          >
            {early}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
export default observer(EarlyList);