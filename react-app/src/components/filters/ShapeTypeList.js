import React, { useContext} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";

function ShapeTypeList() {
  const { stamp } = useContext(Context);

  return (
    <div style={{ height: '225px', overflow: 'scroll' }}>
      <ListGroup>
        {stamp.shapes.map((shape) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={shape === stamp.selectedShape}
            onClick={() => {
              if (shape === stamp.selectedShape) {
                stamp.setSelectedShape(null);
              } else {
                stamp.setSelectedShape(shape);
              }
            }}
            key={shape}
            variant="dark"
          >
            {shape}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
export default observer(ShapeTypeList);