import React, { useContext} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";

function ContentTypeList() {
  const { stamp } = useContext(Context);

  return (
    <>
      <ListGroup>
        {stamp.contents.map((content) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={content === stamp.selectedContent}
            onClick={() => {
              if (content === stamp.selectedContent) {
                stamp.setSelectedContent(null);
              } else {
                stamp.setSelectedContent(content);
              }
            }}
            key={content}
            variant="dark"
          >
            {content}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
export default observer(ContentTypeList);