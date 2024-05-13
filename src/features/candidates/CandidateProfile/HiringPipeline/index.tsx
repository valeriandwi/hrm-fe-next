import React from "react";
import HiringStep from "./HiringStep";
import HiringDetail from "./Detail";
import HiringNotes from "./HiringNotes";

const HiringPipeline: React.FC = () => {
  return (
    <div>
      <HiringStep currentStep={1} />
      <HiringDetail />
      <HiringNotes />
    </div>
  );
};

export default HiringPipeline;
