import React, { FC } from "react";

type StepTwoProps = {
  onClick: () => void;
};

const StepTwo: FC<StepTwoProps> = ({ onClick }: StepTwoProps) => {
  return (
    <>
      <div>
        <h1>step 2</h1>
        <button onClick={onClick}>step 3</button>
      </div>
    </>
  );
};

export default StepTwo;
