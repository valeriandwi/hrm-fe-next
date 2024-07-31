import React from "react";
import BasicInformation from "../BasicInformation";
import ProfessionalDetails from "../ProfessionalDetails";

const DetailProfile: React.FC = () => {
  return (
    <div className="flex space-y-4 flex-col">
      <BasicInformation />
      <ProfessionalDetails />
    </div>
  );
};

export default DetailProfile;
