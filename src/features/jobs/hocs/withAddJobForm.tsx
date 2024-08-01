import React from "react";
import { IJobFormProps } from "../JobForm";

const withAddJobForm = (Component: React.ComponentType<IJobFormProps>) => {
  const NewComponent: React.FC = () => {
    return <Component onSubmit={() => {}} />;
  };

  return NewComponent;
};

export default withAddJobForm;
