import { useState, useContext } from 'react';
import { Range } from 'react-range';
import './s.css';
import { Context } from '../../index';
import { observer} from 'mobx-react-lite';

const LateSlider = ({ onChange = () => {}, store }) => {
  const { stamp } = useContext(Context);
  const [values, setValues] = useState([stamp.selectedLate.min, stamp.selectedLate.max].sort());

  const handleValuesChange = newValues => {
    setValues(newValues);
    onChange({ min: newValues[0], max: newValues[1] });
    store.setSelectedLate({ min: newValues[0], max: newValues[1] }); // update selectedLate in context
  };

  const minLate = -500; // replace with your actual minimum value
  const maxLate = 0; // replace with your actual maximum value

  return (
    <div className="range-slider">
      <Range
        step={1}
        min={minLate}
        max={maxLate}
        values={values}
        allowOverlap={false}
        onChange={handleValuesChange}
        renderTrack={({ props, children }) => (
          <div {...props} className="slider-track">
            {children}
          </div>
        )}
        renderThumb={({ props }) => <div {...props} className="slider-thumb" />}
      />
      <div className="slider-values">
        <span>{values[0]}</span>
        <span>{values[1]}</span>
      </div>
    </div>
  );
};

export default observer(LateSlider);

// const LateSlider = observer(({ selected = { min: -425, max: -86 }, onChange = () => {} }) => {
//   const [values, setValues] = useState([selected.min, selected.max]);
//   const store = useContext(Context);

//   const handleValuesChange = newValues => {
//     setValues(newValues);
//     onChange({ min: newValues[0], max: newValues[1] });
//     store.setSliderValues(newValues); // update values in context
//   };

//   return (
//     <div className="range-slider">
//       <Range
//         step={1}
//         min={-425}
//         max={-86}
//         values={values}
//         onChange={handleValuesChange}
//         renderTrack={({ props, children }) => (
//           <div {...props} className="slider-track">
//             {children}
//           </div>
//         )}
//         renderThumb={({ props }) => <div {...props} className="slider-thumb" />}
//       />
//       <div className="slider-values">
//         <span>{values[0]}</span>
//         <span>{values[1]}</span>
//       </div>
//     </div>
//   );
// });

// export default LateSlider;