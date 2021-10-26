import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/helpers.js";
import PropTypes from "prop-types";

const Display = styled.label`
  // border-radius: 0.3rem;
  // padding: 1rem;
  // margin: 0.5rem;
  font-size: 2.8rem;
  font-family: "Orbitron", sans-serif;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  // background-color: ${COLORS.text};
`;

const DisplayTime = (props) => {
  const [time, setTime] = useState(props.time);
  return <Display className={props.styleName}>{time}</Display>;
};
Display.propTypes = {
  styleName: PropTypes.string,
};

export default DisplayTime;
