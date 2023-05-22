import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";
import { Context } from "../../index";

const YearList = observer(() => {
  const { stamp } = useContext(Context);

  return (
    <>
      <ListGroup>
        {stamp.years.map((year) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={year === stamp.selectedYear}
            onClick={() => {
              if (year === stamp.selectedYear) {
                stamp.setSelectedYear(null);
              } else {
                stamp.setSelectedYear(year);
              }
            }}// call setSelectedYear directly
            key={year}
            variant="dark"
          >
            {year}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
});

export default YearList;