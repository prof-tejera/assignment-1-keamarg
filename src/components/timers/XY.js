import React, { useState } from "react";
import styled from "styled-components";
import Panel from "../generic/Panel";
import Settings from "../generic/Settings";
import Button from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import { COLORS } from "../../utils/helpers";

const UpperPanel = styled.div`
  position: relative;
  height: 15rem;
  .false {
    color: ${COLORS.stop};
    animation: pulse 1.2s ease infinite, color 0.3s ease;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes color {
    0% {
      color: black;
    }
    100% {
      color: ${COLORS.stop};
    }
  }

  i.icon {
    font-size: 10rem;
    opacity: 40%;
    display: block;
    padding-top: 2rem;
  }
  .settingsBtn {
    z-index: 1;
    font-size: 1.5rem;
    // display: block;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background-color: transparent;
  }
`;
const LowerPanel = styled.div`
  height: 15rem;
`;

const Xy = () => {
  const timerType = "Xy";
  const [btnState, setBtnState] = useState(true);
  const sendBtnState = (btnState) => {
    console.log("btnState" + btnState);
    setBtnState(btnState);
  };
  const [settingsState, setSettingsState] = useState(false);
  const sendSettingsState = (settingsState) => {
    console.log("settingsState" + settingsState);
    setSettingsState(settingsState);
  };

  if (!settingsState) {
    return (
      <Panel timerType={timerType}>
        <UpperPanel className="text-center">
          <Button
            type={settingsState ? "exitSettings" : "enterSettings"}
            styleName="settingsBtn"
            btnState={btnState}
            settingsState={settingsState}
            sendBtnState={sendBtnState}
            sendSettingsState={sendSettingsState}
          ></Button>
          <i className={`bi bi-stopwatch icon ${btnState}`}></i>
        </UpperPanel>
        <LowerPanel className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <DisplayTime
                styleName="col text-center"
                time={`0${0}:0${0}:0${0}`}
              />
            </div>
            <div className="row justify-content-around">
              <Button
                styleName="col-5"
                btnState={btnState}
                type={btnState ? "Start" : "Stop"}
                sendBtnState={sendBtnState}
              ></Button>
              <Button
                styleName="col-5"
                btnState={btnState}
                type="Reset"
                sendBtnState={sendBtnState}
              ></Button>
            </div>
          </div>
        </LowerPanel>
      </Panel>
    );
  }
  return (
    <Panel timerType={timerType}>
      <UpperPanel className="text-center d-flex align-items-center justify-content-center">
        <Button
          type={settingsState ? "exitSettings" : "enterSettings"}
          styleName="settingsBtn"
          btnState={btnState}
          settingsState={settingsState}
          sendBtnState={sendBtnState}
          sendSettingsState={sendSettingsState}
        ></Button>
        <Settings
          styleName="p-2"
          placeholder="Enter time per round in seconds"
          placeholderRounds="Enter number of rounds"
          type="Xy"
        ></Settings>
      </UpperPanel>
    </Panel>
  );
};
export default Xy;
