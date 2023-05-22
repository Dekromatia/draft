import React, { useContext} from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";

export default function LateD() {
  const { stamp } = useContext(Context);
  return [stamp.lates];
}

//   return (
//     <>
//       {stamp.lates.map((late) => (
//         <div
//           style={{ cursor: "pointer" }}
//           key={late}
//         >
//           {late}
//         </div>
//       ))}
//     </>
//   );
// };
// export default observer(LateD);