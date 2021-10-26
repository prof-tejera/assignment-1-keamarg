import React, { useState } from "react";
import Panel from "../generic/Panel";
import Button from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";

const Stopwatch = () => {
  const [btnType, setBtnType] = useState(true);
  const sendBtnType = (btnState) => {
    console.log(btnState);
    setBtnType(btnState);
  };
  const timerType = "Stopwatch";
  return (
    <Panel timerType={timerType}>
      <div className="container">
        <div className="row">
          <DisplayTime styleName="col text-center" time={`0${0}:0${0}:0${0}`} />
        </div>
        <div className="row justify-content-around">
          <Button
            styleName="col-5"
            btnType={btnType}
            type={btnType ? "Start" : "Stop"}
            sendBtnType={sendBtnType}
          ></Button>
          <Button
            styleName="col-5"
            btnType={btnType}
            type="Reset"
            sendBtnType={sendBtnType}
          ></Button>
        </div>
      </div>
    </Panel>
  );
};
export default Stopwatch;
