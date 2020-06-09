import React from "react";
import "./Container.css";
import Button from "./button/Button";
import Slider from "./slider/Slider";
import Checkbox from "./checkbox/Checkbox";

const CHECKBOX_LIST = [
  { id: 0, name: "uppercase", label: "Uppercase", isChecked: true },
  { id: 1, name: "lowercase", label: "Lowercase", isChecked: true },
  { id: 2, name: "symbols", label: "Symbols", isChecked: true },
  { id: 3, name: "numbers", label: "Numbers", isChecked: true },
];

const Container = () => {
  const onChangeSlider = (e) => {
    console.log(e.target.value);
  };

  const onChangeCheckBox = (e) => {
    console.log(e.target.checked);
  };

  return (
    <div className="password-settings">
      <h3>Use the Slider, and select form the options</h3>

      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            &nbsp;
            <Slider
              min={1}
              max={60}
              step={1}
              defaultLength={10}
              value={10}
              onChangeValue={onChangeSlider}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="row checkbox-container">
            {CHECKBOX_LIST.map((checkbox) => (
              <Checkbox
                key={checkbox.id}
                name={Checkbox.name}
                checked={checkbox.isChecked}
                label={checkbox.label}
                value={checkbox.isChecked}
                onChange={onChangeCheckBox}
                disabled={false}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="row">
          <div className="col-md-12">
            <Button className="btn password-btn" label="Copy Password" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
