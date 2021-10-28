import styled from "styled-components";
import PropTypes from "prop-types";
import { COLORS } from "../../utils/helpers.js";

const SetTime = styled.input`
  // border: 1px solid black;
  color: ${(props) =>
    props.type === "Stopwatch"
      ? COLORS.stopwatch
      : props.type === "Countdown"
      ? COLORS.countdown
      : props.type === "XY"
      ? COLORS.xy
      : COLORS.tabata};
  font-size: 0.8rem;
  border-radius: 0.5rem;
  border: 0px;
  width: 100%;
`;

const Credentials = styled.p`
  font-size: 0.8rem;
  color: ${COLORS.text};
`;

const Settings = (props) => {
  Settings.defaultProps = {
    type: "Countdown",
    timerType: "Countdown",
    placeholder: "input",
    placeholderRounds: "input",
    placeholderRest: "input",
  };
  return (
    <div className="w-75">
      {props.type !== "Stopwatch" ? (
        <SetTime
          type={props.type}
          className={props.styleName}
          placeholder={props.placeholder}
        ></SetTime>
      ) : null}
      {props.type === "Xy" || props.type === "Tabata" ? (
        <SetTime
          type={props.type}
          className={props.styleName}
          placeholder={props.placeholderRounds}
        ></SetTime>
      ) : null}
      {props.type === "Tabata" ? (
        <SetTime
          type={props.type}
          className={props.styleName}
          placeholder={props.placeholderRest}
        ></SetTime>
      ) : null}
      <Credentials>By Martin Gundtoft</Credentials>
    </div>
  );
};

Settings.propTypes = {
  type: PropTypes.string,
  timerType: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderRounds: PropTypes.string,
  placeholderRest: PropTypes.string,
};

export default Settings;
