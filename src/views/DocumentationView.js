import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";
import Button from "../components/generic/Button";
import DisplayTime from "../components/generic/DisplayTime";
import Panel from "../components/generic/Panel";
import Settings from "../components/generic/Settings";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const Documentation = () => {
  return (
    <Container>
      <div>
        <Title>Documentation</Title>
        <DocumentComponent
          title="Loading spinner "
          component={<Loading />}
          propDocs={[
            {
              prop: "size",
              description: "Changes the size of the loading spinner",
              type: "string",
              defaultValue: "medium",
            },
          ]}
        />
        <DocumentComponent
          title="Button"
          component={<Button />}
          propDocs={[
            {
              prop: "btnState",
              description: "Starts and stops the timer",
              type: "boolean",
              defaultValue: "true",
            },
            {
              prop: "settingsState",
              description: "Switches between main app and settings",
              type: "boolean",
              defaultValue: "false",
            },
            {
              prop: "styleName",
              description: "Has the classNames",
              type: "String",
              defaultValue: "settingsBtn",
            },
            {
              prop: "type",
              description: "Has the type of style for the given timer",
              type: "String",
              defaultValue: "Stopwatch",
            },
          ]}
        />
        <DocumentComponent
          title="DisplayTime"
          component={<DisplayTime />}
          propDocs={[
            {
              prop: "styleName",
              description: "Has the classNames",
              type: "String",
              defaultValue: "myClass",
            },
            {
              prop: "time",
              description: "Has the timer value",
              type: "String",
              defaultValue: "0",
            },
          ]}
        />
        <DocumentComponent
          title="Panel"
          component={<Panel />}
          propDocs={[
            {
              prop: "timerType",
              description: "Has the type of timer",
              type: "String",
              defaultValue: "myClass",
            },
          ]}
        />
        <DocumentComponent
          title="Settings"
          component={<Settings />}
          propDocs={[
            {
              prop: "type",
              description: "Has the type of timer",
              type: "String",
              defaultValue: "Countdown",
            },
            {
              prop: "timerType",
              description: "Has the type of timer settings",
              type: "String",
              defaultValue: "Countdown",
            },
            {
              prop: "placeholder",
              description: "Has the value of the input field for countdown",
              type: "String",
              defaultValue: "input",
            },
            {
              prop: "placeholderRounds",
              description: "Has the value of the input field for rounds",
              type: "String",
              defaultValue: "input",
            },
            {
              prop: "placeholderRest",
              description: "Has the value of the input field for rest",
              type: "String",
              defaultValue: "input",
            },
          ]}
        />
      </div>
    </Container>
  );
};

export default Documentation;
