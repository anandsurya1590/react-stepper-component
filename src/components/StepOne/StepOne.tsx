import React, { FC } from "react";

type StepOneProps = {
  onClick: () => void;
};

const StepOne: FC<StepOneProps> = ({ onClick }: StepOneProps) => {
  return (
    <>
      <div>
        <h1>step 1</h1>
        <button onClick={onClick}>Step 2</button>
      </div>
    </>
  );
};

export default StepOne;
