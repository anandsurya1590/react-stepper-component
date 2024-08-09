import React, { useEffect, useState } from "react";
import { StepOne, StepTwo, StepThree } from "../../components";

import "./Normal.scss";

const Normal = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [steps, setSteps] = useState([
    {
      step: 1,
      name: "step 1",
      status: "active",
    },
    {
      step: 2,
      name: "step 2",
      status: "default",
    },
    {
      step: 3,
      name: "step 3",
      status: "default",
    },
  ]);

  useEffect(() => {
    const state = [...steps];
    const updated = state.map((item) => {
      if (item.step === activeStep) {
        return {
          ...item,
          status: "active",
        };
      } else if (item.step < activeStep) {
        return {
          ...item,
          status: "completed",
        };
      } else {
        return item;
      }
    });

    setSteps(updated);
  }, [activeStep]);

  const handleClick = () => {
    setActiveStep(activeStep + 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 1:
        return <StepOne onClick={handleClick} />;
        break;
      case 2:
        return <StepTwo onClick={handleClick} />;
        break;
      case 3:
        return <StepThree onClick={handleClick} />;
        break;
      default:
        return (
          <>
            <div>
              <h1>Completed all steps</h1>
              <button onClick={() => alert("finished")}>Finish</button>
            </div>
          </>
        );
    }
  };

  return (
    <div className="layout">
      {/*   <div className="layout__header">
        <Header />
      </div> */}
      <div className="layout__body">
        <div className="left-menu">
          {steps.map((step) => {
            const stepClass =
              step.status === "active"
                ? "active"
                : step.status === "default"
                ? "disabled"
                : step.status === "completed"
                ? "completed"
                : "disabled";

            return (
              <>
                <ul>
                  <li className={stepClass}>{step.name}</li>
                </ul>
              </>
            );
          })}
        </div>
        <div className="main-section">{getStepContent(activeStep)}</div>
      </div>
      {/*  <div className="layout__footer">
        <Footer />
      </div> */}
    </div>
  );
};

export default Normal;
