import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";
import { Context } from "../../index";

const ColorList = observer(() => {
  const { stamp } = useContext(Context);

  return (
    <div style={{ height: '225px', overflow: 'scroll' }}>
      <ListGroup>
        {/* {stamp.colors.map((color) => ( */}
        {stamp.colors
        .slice() // create a copy of the array
        .sort((a, b) => a.localeCompare(b, 'en', {ignorePunctuation: true, sensitivity: 'base'}))
        .map((color) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={color === stamp.selectedColor}
            onClick={() => {
              if (color === stamp.selectedColor) {
                stamp.setSelectedColor(null);
              } else {
                stamp.setSelectedColor(color);
              }
            }}
            // onClick={() => stamp.setSelectedColor(color)} // call setSelectedYear directly
            key={color}
            variant="dark"
          >
            {color}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
});

export default ColorList;