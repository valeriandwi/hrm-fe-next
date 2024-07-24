import { Button, Typography } from "antd";
import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import AppModal from "@/components/shared/AppModal";
import InterviewCard from "./InterviewCard";
import InterviewForm from "./InterviewForm";

const InterviewsInfo: React.FC = () => {
  const [modal, { toggleModal }] = AppModal.useModal();

  return (
    <div>
      <div className="flex justify-between">
        <Typography className="font-bold mb-4">Interview List</Typography>
        <Button
          type="link"
          className="text-green-500"
          onClick={() => toggleModal()}
          icon={<PlusCircleOutlined />}
        >
          Add Interview Schedule
        </Button>
      </div>
      <InterviewCard />
      <AppModal title={"Add Interview List"} modal={modal}>
        <InterviewForm />
      </AppModal>
    </div>
  );
};

export default InterviewsInfo;
