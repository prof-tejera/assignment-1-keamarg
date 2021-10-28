import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { COLORS } from "../../utils/helpers";

const Btn = styled.button`
  border-radius: 0.3rem;
  // padding: 0.5rem;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${COLORS.text};
  transition: 0.2s ease;
  :hover {
    opacity: 0.6;
  }
  background-color: ${(props) =>
    props.type === "Start"
      ? COLORS.start
      : props.type === "Stop"
      ? COLORS.stop
      : COLORS.reset};
`;

const Button = (props) => {
  Button.defaultProps = {
    btnState: true,
    settingsState: false,
    styleName: "settingsBtn",
    type: "Stopwatch",
  };
  const changeBtnState = () => {
    props.type === "Reset"
      ? props.sendBtnState(true)
      : props.sendBtnState(!props.btnState);
  };
  const changeSettingsState = () => {
    props.sendSettingsState(!props.settingsState);
  };
  return (
    <Btn
      className={props.styleName}
      type={props.type}
      onClick={() => {
        changeBtnState();
        if (props.styleName === "settingsBtn") {
          changeSettingsState();
        }
      }}
    >
      {props.type === "Reset" ? (
        <i className="bi bi-arrow-counterclockwise"></i>
      ) : props.type === "Start" ? (
        <i className="bi bi-play-circle"></i>
      ) : props.type === "Stop" ? (
        <i className="bi bi-pause-circle"></i>
      ) : props.styleName === "settingsBtn" ? (
        <i className="bi bi-list"></i>
      ) : null}
    </Btn>
  );
};
Button.propTypes = {
  btnState: PropTypes.bool,
  settingsState: PropTypes.bool,
  styleName: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
