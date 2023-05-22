import React, { useContext, useEffect} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";
import { fetchPreservations } from '../../http/stampAPI';

function PreservationList() {
  const { stamp } = useContext(Context);
  // useEffect(() => {
  //   fetchPreservations().then(data => stamp.setPreservations(data));
  // }, []);

  return (
    <>
      <ListGroup>
        {stamp.preservations.map((preservation) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={preservation === stamp.selectedPreservation}
            onClick={() => {
              if (preservation === stamp.selectedPreservation) {
                stamp.setSelectedPreservation(null);
              } else {
                stamp.setSelectedPreservation(preservation);
              }
            }}
            key={preservation}
            variant="dark"
          >
            {preservation}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
  
  
  export default observer(PreservationList);

// function PreservationList() {
//   const { stamp } = useContext(Context);

//   useEffect(() => {
//     fetchStamps().then(data => stamp.setStamps(data))
//   }, []);

//   const uniquePreservations= [...new Set(stamp.stamps.map(item => item.stamp_preservation))];

//   return (
//     <ListGroup>
//       {uniquePreservations.map((preservation) => (
//         <ListGroup.Item 
//           style={{ cursor: 'pointer' }}
//           active={preservation === stamp.selectedStamp?.stamp_preservation}
//         //   onClick={() => stamp.setSelectedStamp(stamp.stamps.find(item => item.stamp_preservation === preservation))}
//           onClick={() => {
//               if (preservation === stamp.selectedStamp?.stamp_preservation) {
//               stamp.setSelectedStamp(stamp.stamps.find(item => item.stamp_preservation === null));
//               } else {
//               stamp.setSelectedStamp(stamp.stamps.find(item => item.stamp_preservation === preservation));
//               }
//           }}
//           key={preservation}
//           variant="dark"
//         >
//           {preservation}
//         </ListGroup.Item>
//       ))}
//     </ListGroup>
//   );
// }

// export default observer(PreservationList);