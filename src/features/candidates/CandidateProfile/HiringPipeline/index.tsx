import React from "react";
import HiringStep from "./HiringStep";
import HiringDetail from "./Detail";
import HiringNotes from "./HiringNotes";

const HiringPipeline: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <HiringStep currentStep={1} />
      <HiringDetail />
      <HiringNotes />
    </div>
  );
};

export default HiringPipeline;
