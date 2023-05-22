import React, { useState, useEffect, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { Context } from "../../index";
import { fetchEarlys, fetchLates } from '../../http/stampAPI';
import { observer } from 'mobx-react-lite';

const DualRangeSlider = observer(() => {
  const { stamp } = useContext(Context);

  const minEarly = -500;
  const maxEarly = -107;

  const minLate = -425;
  const maxLate = -86;

  const date_early = stamp.selectedEarly && stamp.selectedEarly.min >= minEarly ? stamp.selectedEarly : { min: minEarly, max: maxEarly };
  const date_late = stamp.selectedLate && stamp.selectedLate.min >= minLate ? stamp.selectedLate : { min: minLate, max: maxLate };

  const handleEarlyChange = e => {
    stamp.setSelectedEarly({ ...stamp.selectedEarly, [e.target.name]: Number(e.target.value) });
  };

  const handleLateChange = values => {
    stamp.setSelectedLate({ min: Number(values[0]), max: Number(values[1]) });
  };

  return (
    <Form.Group className="mb-3" inline>
      <Form.Label>Early Date</Form.Label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Form.Range style={{ width: '50%' }} min={minEarly} max={maxEarly} value={date_early.min} onChange={handleEarlyChange} name="min" />
        <Form.Range style={{ width: '50%' }} min={minEarly} max={maxEarly} value={date_early.max} onChange={handleEarlyChange} name="max" />
        <Form.Label className="ms-3">{date_early.min} - {date_early.max}</Form.Label>
      </div>

      <Form.Label className="ms-3">Late Date</Form.Label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Form.Range style={{ width: '50%' }} min={minLate} max={maxLate} value={date_late.min} onChange={e => handleLateChange([e.target.value, date_late.max])} name="min" />
        <Form.Range style={{ width: '50%' }} min={minLate} max={maxLate} value={date_late.max} onChange={e => handleLateChange([date_late.min, e.target.value])} name="max" />
        <Form.Label className="ms-3">{date_late.min} - {date_late.max}</Form.Label>
      </div>
    </Form.Group>
  );
});

export default DualRangeSlider;

//   const date_early = stamp.selectedEarly && stamp.selectedEarly.min >= minEarly ? stamp.selectedEarly : { min: minEarly, max: minEarly };
//   const date_late = stamp.selectedLate && stamp.selectedLate >= minLate ? stamp.selectedLate : minLate;

//   const handleEarlyChange = e => {
//     stamp.setSelectedEarly({ ...stamp.selectedEarly, [e.target.name]: Number(e.target.value) });
//   };

//   return (
//     <Form.Group className="mb-3" inline>
//       <Form.Label>Early Date</Form.Label>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <Form.Range style={{ width: '50%' }} min={minEarly} max={maxEarly} value={date_early.min} onChange={handleEarlyChange} name="min" />
//         <Form.Range style={{ width: '50%' }} min={minEarly} max={maxEarly} value={date_early.max} onChange={handleEarlyChange} name="max" />
//         <Form.Label className="ms-3">{date_early.min} - {date_early.max}</Form.Label>
//       </div>

//       <Form.Label className="ms-3">Late Date</Form.Label>
//       <Form.Range min={minLate} max={maxLate} value={date_late} onChange={e => stamp.setSelectedLate(Number(e.target.value))} />
//       <Form.Label className="ms-3">{date_late}</Form.Label>
//     </Form.Group>
//   );
// });

// export default DualRangeSlider;

  // Отобраался но не работал
// const { stamp } = useContext(Context);
// const early = Math.min(...EarlyD());
// const late = Math.max(...LateD());
// const [rangeValues, setRangeValues] = useState(
//   [early, late]
//     .map(Math.abs)
//     .filter((value) => !isNaN(value)) // remove NaN values
//     .sort((a, b) => a - b)
//     .map((value) => value * -1)
// );

// const handleDualRangeChange = (newValues) => {
//   setRangeValues(newValues);
// };

// return (
//   <div>
//     <Range
//       step={1}
//       min={early}
//       max={late}
//       values={rangeValues}
//       onChange={handleDualRangeChange}
//       renderTrack={({ props, children }) => (
//         <div
//           {...props}
//           style={{
//             ...props.style,
//             height: '6px',
//             display: 'flex',
//             width: '100%',
//             borderRadius: '4px',
//             background: '#ddd',
//           }}
//         >
//           {children}
//         </div>
//       )}
//       renderThumb={({ props }) => (
//         <div
//           {...props}
//           style={{
//             ...props.style,
//             height: '20px',
//             width: '20px',
//             borderRadius: '50%',
//             backgroundColor: '#fff',
//             boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
//           }}
//         />
//       )}
//     />
//   </div>
// );
// }
// export default observer(DualRangeSlider);
//   const [values, setValues] = useState([25, 75]);

//   const handleRangeChange = (newValues) => {
//     setValues(newValues);
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <div style={{ marginRight: '20px' }}>
//         <label>Range 1</label>
//         <Range
//           step={1}
//           min={0}
//           max={100}
//           values={values}
//           onChange={handleRangeChange}
//           renderTrack={({ props, children }) => (
//             <div
//               {...props}
//               style={{
//                 ...props.style,
//                 height: '6px',
//                 display: 'flex',
//                 width: '100%',
//                 borderRadius: '4px',
//                 background: '#ddd',
//               }}
//             >
//               {children}
//             </div>
//           )}
//           renderThumb={({ props }) => (
//             <div
//               {...props}
//               style={{
//                 ...props.style,
//                 height: '20px',
//                 width: '20px',
//                 borderRadius: '50%',
//                 backgroundColor: '#fff',
//                 boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
//               }}
//             />
//           )}
//         />
//         <span>{`${values[0]} - ${values[1]}`}</span>
//       </div>
//     </div>
//   );
// }




// import React, { useContext } from 'react';
// import RangeSlider from 'react-bootstrap-range-slider';
// import { observer } from 'mobx-react';
// import { Context } from '../index';

// function DualRangeSlider() {
//   const { stamp } = useContext(Context);

//   const handleRange1Change = (event) => {
//     stamp.setSelectedEarly(Number(event.target.value));
//   };

//   const handleRange2Change = (event) => {
//     stamp.setSelectedLate(Number(event.target.value));
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <div style={{ marginRight: '20px' }}>
//         <label>Range 1</label>
//         <RangeSlider
//           value={stamp.selectedEarly}
//           onChange={handleRange1Change}
//           min={Math.min(...stamp.earlys)}
//           max={Math.max(...stamp.earlys)}
//         />
//         <span>{stamp.selectedEarly}</span>
//       </div>
//       <div>
//         <label>Range 2</label>
//         <RangeSlider
//           value={stamp.selectedLate}
//           onChange={handleRange2Change}
//           min={Math.min(...stamp.lates)}
//           max={Math.max(...stamp.lates)}
//         />
//         <span>{stamp.selectedLate}</span>
//       </div>
//     </div>
//   );
// }

// export default observer(DualRangeSlider);