import React, { useContext} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";

function LateList() {
  const { stamp } = useContext(Context);

  return (
    <div style={{ height: '225px', overflow: 'scroll' }}>
      <ListGroup>
        {/* {stamp.lates.map((late) => ( */}
        {stamp.lates
        .filter((late) => late !== undefined) // filter out undefined values
        .sort((a, b) => parseInt(b) - parseInt(a)) // sort the array
        .map((late) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={late === stamp.selectedLate}
            onClick={() => {
              if (late === stamp.selectedLate) {
                stamp.setSelectedLate(null);
              } else {
                stamp.setSelectedLate(late);
              }
            }}
            key={late}
            variant="dark"
          >
            {late}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
export default observer(LateList);