import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";
import { Context } from "../../index";

const ArtifGroupList = observer(() => {
  const { stamp } = useContext(Context);

  return (
    <>
      <ListGroup>
        {stamp.groups.map((group) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={group === stamp.selectedGroup}
            onClick={() => {
              if (group === stamp.selectedGroup) {
                stamp.setSelectedGroup(null);
              } else {
                stamp.setSelectedGroup(group);
              }
            }}
            // onClick={() => stamp.setSelectedGroup(group)} // call setSelectedYear directly
            key={group}
            variant="dark"
          >
            {group}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
});

export default ArtifGroupList;