import { Component } from "react";
import StepWizard from "react-step-wizard";
import "./styles.css";
import "animate.css";

export default class App extends Component {
  render() {
    const Redbox = ({ children }) => (
      <div style={{ background: "red" }}>{children}</div>
    );
    const Greenbox = ({ children }) => (
      <div style={{ background: "green" }}>{children}</div>
    );
    const Bluebox = ({ children }) => (
      <div style={{ background: "blue" }}>{children}</div>
    );
    let custom = {
      enterRight: "animated fadeIn",
      enterLeft: "animated fadeIn",
      exitRight: "animated fadeOut",
      exitLeft: "animated fadeOut"
    };
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <StepWizard transitions={custom}>
          <Step step={1} />
          <Step step={2} />
          <Step step={3} />
          <Step step={4} />
          <Step step={5} />
        </StepWizard>

        <Redbox>
          <h1>Hello World</h1>
        </Redbox>
        <Greenbox>
          <h1>Hello World</h1>
        </Greenbox>
        <Bluebox>
          <h1>Hello World</h1>
        </Bluebox>
      </div>
    );
  }
}

function Step({
  step,
  isActive,
  currentStep,
  totalSteps,
  firstStep,
  lastStep,
  nextStep,
  previousStep,
  goToStep
}) {
  const restStepWizard = {
    isActive,
    currentStep,
    totalSteps,
    firstStep,
    lastStep,
    nextStep,
    previousStep,
    goToStep
  };
  return (
    <div>
      <h1>This is Step {step}</h1>
      <button onClick={previousStep}>Prev Step</button>
      <button onClick={nextStep}>Next Step</button>
      <StepChild step={step} {...restStepWizard} />
    </div>
  );
}

function StepChild({ step, previousStep, nextStep }) {
  return <button onClick={nextStep}>Click Here {1}</button>;
}
