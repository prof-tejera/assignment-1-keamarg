import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { COLORS } from "../../utils/helpers.js";

const Container = styled.div`
  // border: 1px solid black;
  width: 20rem;
  height: 30rem;
  background-color: ${(props) =>
    props.type === "Stopwatch"
      ? COLORS.stopwatch
      : props.type === "Countdown"
      ? COLORS.countdown
      : props.type === "XY"
      ? COLORS.xy
      : COLORS.tabata};
  // color: var(--blue);
  padding: 2rem 0 2rem 0;
  // line-height: 30px;
  font-size: 2rem;
  // border-radius: 1rem;
`;

const Panel = (props) => {
  return (
    <Container
      type={props.timerType}
      className="mainPanel d-flex align-items-center"
    >
      {props.children}
    </Container>
  );
};

Panel.propTypes = {
  timerType: PropTypes.string,
};

export default Panel;