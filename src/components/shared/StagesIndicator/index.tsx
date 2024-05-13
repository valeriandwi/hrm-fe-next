import React from "react";

type StagesIndicatorProps = {
  currentStage: number;
};

const StagesIndicator: React.FC<StagesIndicatorProps> = ({ currentStage }) => {
  return (
    <div className="flex space-x-1 w-full">
      {[1, 2, 3, 4, 5].map((number) => {
        if (number > currentStage) {
          return <div key={number} className="bg-gray-200 w-6" />;
        }
        return (
          <div key={number} className="bg-green-800 w-6 text-center h-4" />
        );
      })}
    </div>
  );
};

export default StagesIndicator;
