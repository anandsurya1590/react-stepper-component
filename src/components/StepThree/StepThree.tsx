import React, { FC } from "react";

type StepThreeProps = {
  onClick: () => void;
};

const StepThree: FC<StepThreeProps> = ({ onClick }: StepThreeProps) => {
  return (
    <>
      <div>
        <h1>step 3</h1>
        <button onClick={onClick}>Finish</button>
      </div>
    </>
  );
};

export default StepThree;
