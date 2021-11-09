import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/helpers.js";
import PropTypes from "prop-types";

const Display = styled.label`
  // border-radius: 0.3rem;
  // padding: 1rem;
  margin-bottom: 2rem;
  font-size: 4.5rem;
  font-weight: 300;
  // font-family: "Orbitron", sans-serif;
  color: white;
  // text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
  //   1px 1px 0 #000;
  // background-color: ${COLORS.text};
`;

const DisplayTime = (props) => {
  Display.defaultProps = {
    styleName: "myClass",
    time: "0",
  };
  const [time] = useState(props.time);
  return <Display className={props.styleName}>{time}</Display>;
};
Display.propTypes = {
  styleName: PropTypes.string,
  time: PropTypes.string,
};

export default DisplayTime;
