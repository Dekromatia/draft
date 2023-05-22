import { useState } from 'react';
import { Range } from 'react-range';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";

const EarlySlider = ({ selected, onChange }) => {

  const [values, setValues] = useState([selected.min, selected.max]);

  const handleValuesChange = newValues => {
    setValues(newValues);
    onChange({ min: newValues[0], max: newValues[1] });
  };

  return (
    <div className="range-slider">
      <Range
        step={1}
        min={-500}
        max={-107}
        values={values}
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

export default EarlySlider;