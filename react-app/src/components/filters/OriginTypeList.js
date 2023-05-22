import React, { useContext} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";

function OriginTypeList() {
  const { stamp } = useContext(Context);

  return (
    <>
      <ListGroup>
        {stamp.origins.map((origin) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={origin === stamp.selectedOrigin}
            onClick={() => {
              if (origin === stamp.selectedOrigin) {
                stamp.setSelectedOrigin(null);
              } else {
                stamp.setSelectedOrigin(origin);
              }
            }}
            key={origin}
            variant="dark"
          >
            {origin}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
export default observer(OriginTypeList);