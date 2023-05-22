import React, { useContext} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";

function GarlanList() {
  const { stamp } = useContext(Context);

  return (
    <div style={{ height: '225px', overflow: 'scroll' }}>
      <ListGroup>
      {[...stamp.garlans] // create a copy of the array using the spread operator
        .sort((a, b) => a.localeCompare(b, 'en', {ignorePunctuation: true, sensitivity: 'base'}))
        .map((garlan) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={garlan === stamp.selectedGarlan}
            onClick={() => {
              if (garlan === stamp.selectedGarlan) {
                stamp.setSelectedGarlan(null);
              } else {
                stamp.setSelectedGarlan(garlan);
              }
            }}
            key={garlan}
            variant="dark"
          >
            {garlan}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
export default observer(GarlanList);