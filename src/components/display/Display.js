import React from "react";
import "./Display.css";
import Container from "../container/Container";

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
            <button className="copy-btn">
              <i className="far fa-copy" />
            </button>
            <button className="generate-btn">
              <i className="fas fa-sync-alt" />
            </button>
          </div>
        </div>
      </div>
      <Container />
    </>
  );
};

export default Display;
