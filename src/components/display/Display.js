import React, { useState } from "react";
import "./Display.css";
import Container from "../container/Container";
import Button from "../container/button/Button";
import { generatePassword } from "../../utils/Helper";

const Display = () => {
  const [password, setPassword] = useState();
  const [rangeValue, setRange] = useState();
  const [passwordProps, setPasswordProps] = useState();

  const generateNewPassword = () => {
    const pwd = generatePassword(passwordProps, rangeValue);
    setPassword(pwd);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12 password-display-container">
          <div>
            <div className="password-display">
              <input
                type="text"
                defaultValue={password}
                className="password-display-input"
                readOnly
              />
            </div>
            <div className="password-description">
              <i className="fas fa-check-circle" /> Strong password
            </div>
          </div>
          <div className="password-display-icons">
            <Button className="copy-btn" iconClass="far fa-copy" />
            <Button
              className="generate-btn"
              iconClass="fas fa-sync-alt"
              handleClick={generateNewPassword}
            />
          </div>
        </div>
      </div>
      <Container
        setPassword={setPassword}
        setRange={setRange}
        setPasswordProps={setPasswordProps}
      />
    </>
  );
};

export default Display;
