import React, { useContext} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";

function FinkelsteinList() {
  const { stamp } = useContext(Context);

  return (
    <div style={{ height: '225px', overflow: 'scroll' }}>
      <ListGroup>
                {/* {stamp.finkelsteins.map((finkelstein) => ( */}
        {[...stamp.finkelsteins] // create a copy of the array using the spread operator
        .sort((a, b) => a.localeCompare(b, 'en', {ignorePunctuation: true, sensitivity: 'base'}))
        .map((finkelstein) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={finkelstein === stamp.selectedFinkelstein}
            onClick={() => {
              if (finkelstein === stamp.selectedFinkelstein) {
                stamp.setSelectedFinkelstein(null);
              } else {
                stamp.setSelectedFinkelstein(finkelstein);
              }
            }}
            key={finkelstein}
            variant="dark"
          >
            {finkelstein}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
export default observer(FinkelsteinList);