import React from "react";
import "./Container.css";
import Button from "./button/Button";
import Slider from "./slider/Slider";
import Checkbox from "./checkbox/Checkbox";

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
            <Checkbox
              name="uppercase"
              checked={true}
              label="Uppercese"
              value={true}
              onChange={onChangeCheckBox}
              disabled={false}
            />
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
