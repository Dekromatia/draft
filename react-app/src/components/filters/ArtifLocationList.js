import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";
import { Context } from "../../index";

const ArtifLocationList = observer(() => {
  const { stamp } = useContext(Context);

  return (
    <div style={{ height: '225px', overflow: 'scroll' }}>
      <ListGroup>
        {stamp.locations.map((location) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={location === stamp.selectedLocation}
            // onClick={() => stamp.setSelectedLocation(location)} // call setSelectedYear directly
            onClick={() => {
              if (location === stamp.selectedLocation) {
                stamp.setSelectedLocation(null);
              } else {
                stamp.setSelectedLocation(location);
              }
            }}
            key={location}
            variant="dark"
          >
            {location}
          </ListGroup.Item>
        ))}
      </ListGroup>
      </div>
    
  );
});

export default ArtifLocationList;