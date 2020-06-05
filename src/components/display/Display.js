import React from "react";
import "./Display.css";
import Container from "../container/Container";
import Button from "../container/button/Button";

const Display = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 password-display-container">
          <div>
            <div className="password-display">
              <input
                type="text"
                className="password-display-input"
                value="asdasdsada"
                readOnly
              />
            </div>
            <div className="password-description">
              <i className="fas fa-check-circle" /> Strong password
            </div>
          </div>
          <div className="password-display-icons">
            <Button className="copy-btn" iconClass="far fa-copy" />
            <Button className="generate-btn" iconClass="fas fa-sync-alt" />
          </div>
        </div>
      </div>
      <Container />
    </>
  );
};

export default Display;
