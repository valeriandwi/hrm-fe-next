import React from "react";
import { IJobFormProps } from "../JobForm";

const withEditJobForm = (Component: React.ComponentType<IJobFormProps>) => {
  const NewComponent: React.FC = () => {
    return <Component isEdit={true} onSubmit={() => {}} />;
  };

  return NewComponent;
};

export default withEditJobForm;
