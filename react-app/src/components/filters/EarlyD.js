import React, { useContext} from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";

export default function EarlyD() {
    const { stamp } = useContext(Context);
    return [stamp.earlies];
  }

// function EarlyD() {
//     function EarlyD() {
//         const { stamp } = useContext(Context);
//         return stamp.earlys;
//       }
//   const { stamp } = useContext(Context);

//   return (
//     <>
//       {stamp.earlys.map((early) => (
//         <div
//           style={{ cursor: "pointer" }}
//           key={early}
//         >
//           {early}
//         </div>
//       ))}
//     </>
//   );
// };
// export default observer(EarlyD);