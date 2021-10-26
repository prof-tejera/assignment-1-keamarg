import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { COLORS } from "../../utils/helpers";

const Btn = styled.button`
  border-radius: 0.3rem;
  padding: 0.5rem;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  color: ${COLORS.text};
  background-color: ${(props) =>
    props.type === "Start"
      ? COLORS.start
      : props.type === "Stop"
      ? COLORS.stop
      : COLORS.reset};
`;

const Button = (props) => {
  return (
    <Btn
      className={props.styleName}
      type={props.type}
      onClick={() =>
        props.type === "Reset"
          ? props.sendBtnType(true)
          : props.sendBtnType(!props.btnType)
      }
    >
      {props.type}
    </Btn>
  );
};
Button.propTypes = {
  btnType: PropTypes.bool,
  styleName: PropTypes.string,
};

export default Button;
