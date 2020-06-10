import React, { useState, useEffect } from "react";
import "./Container.css";
import Button from "./button/Button";
import Slider from "./slider/Slider";
import Checkbox from "./checkbox/Checkbox";
import { generatePassword, setPasswordLength } from "../../utils/Helper";

const CHECKBOX_LIST = [
  { id: 0, name: "uppercase", label: "Uppercase", isChecked: true },
  { id: 1, name: "lowercase", label: "Lowercase", isChecked: true },
  { id: 2, name: "symbols", label: "Symbols", isChecked: true },
  { id: 3, name: "numbers", label: "Numbers", isChecked: true },
];

const Container = (props) => {
  const { setPassword, setRange, setPasswordProps } = props;
  const [rangeValue, setRangeValue] = useState(12);
  const [checkbox, setCheckBox] = useState({
    uppercase: true,
    lowercase: true,
    symbols: true,
    numbers: true,
  });

  const { uppercase, lowercase, symbols, numbers } = checkbox;

  useEffect(() => {
    setPasswordLength(rangeValue);
    setRange(rangeValue);
    setRangeValue(rangeValue);
    passwordGenerated(checkbox, rangeValue);
    // eslint-disable-next-line
  }, [uppercase, lowercase, symbols, numbers]);

  const passwordGenerated = (checkbox, rangeValue) => {
    const pwd = generatePassword(checkbox, rangeValue);
    setPassword(pwd);
    setPasswordProps(checkbox);
  };

  const onChangeSlider = (e) => {
    setRangeValue(e.target.value);
    setPasswordLength(e.target.value);
    setRange(e.target.value);
    passwordGenerated(checkbox, e.target.value);
  };

  const onChangeCheckBox = (e) => {
    let { name, checked } = e.target;
    CHECKBOX_LIST.map((checkbox) => {
      if (checkbox.name === name) {
        checkbox.isChecked = checked;
        setCheckBox({ [name]: checkbox.isChecked });
      }
      return "";
    });
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
              defaultLength={parseInt(rangeValue, 10)}
              value={parseInt(rangeValue, 10)}
              onChangeValue={onChangeSlider}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="row checkbox-container">
            {CHECKBOX_LIST.map((checkbox) => (
              <Checkbox
                key={checkbox.id}
                name={checkbox.name}
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
