import { CloseOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Card, Steps, Typography } from "antd";
import React from "react";

type HiringStepProps = {
  currentStep: number;
};

const HiringStep: React.FC<HiringStepProps> = ({ currentStep = 1 }) => {
  const hiringProcess = [
    "Screening",
    "Design Challenge",
    "Interview",
    "Test",
    "Hired",
  ];
  return (
    <Card className="mb-6">
      <Typography className="mb-4">
        Stage of : <b>UI Designer</b>
      </Typography>
      <Steps
        current={currentStep}
        status="error"
        labelPlacement="vertical"
        direction="horizontal"
        items={hiringProcess.map((process) => ({ title: process }))}
      />
      <div className="flex justify-end mt-4">
        <Button className="mr-2" type="primary" danger>
          <CloseOutlined /> Decline
        </Button>
        <Button type="primary">
          <RightOutlined />
          Move to Next Step
        </Button>
      </div>
    </Card>
  );
};

export default HiringStep;
