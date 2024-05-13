import { Avatar, Button, Tabs, TabsProps, Tag, Typography } from "antd";
import React from "react";
import { LeftOutlined, MailOutlined, RightOutlined } from "@ant-design/icons";
import Resume from "./Resume";
import HiringPipeline from "./HiringPipeline";
import InterviewsInfo from "./InterviewsInfo";
import StagesIndicator from "@/components/shared/StagesIndicator";
import DetailProfile from "./DetailProfile";

const CandidateProfile: React.FC = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Details`,
      children: <DetailProfile />,
    },
    {
      key: "2",
      label: `Resume`,
      children: <Resume />,
    },
    {
      key: "3",
      label: `Hiring Pipeline`,
      children: <HiringPipeline />,
    },
    {
      key: "4",
      label: `Interviews`,
      children: <InterviewsInfo />,
    },
  ];

  return (
    <div>
      <div className="flex mb-2 bg-slate-100 h-full p-4">
        <div className="flex justify-between w-full">
          <div className="flex">
            <Avatar
              size="large"
              className="h-[80px] w-[80px] mr-4"
              src={"https://i.pravatar.cc/300?u=${value}abc"}
            />
            <div>
              <div className="flex text-lg">
                <Typography className="text-lg font-bold">Candidate</Typography>
                <div className="ml-2 h-full">
                  <Tag color="green" className="h-full">
                    Active
                  </Tag>
                </div>
              </div>
              <div>
                <Typography className="text-gray-400 mb-1">Designer</Typography>
                <StagesIndicator currentStage={2} />
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button>
              <LeftOutlined />
            </Button>
            <Button>
              <RightOutlined />
            </Button>
            <Button>
              <MailOutlined />
              Send Email
            </Button>
          </div>
        </div>
      </div>

      <div className="pl-4 pr-4 pb-4">
        <Tabs items={items} size="large" defaultActiveKey="1" />
      </div>
    </div>
  );
};

export default CandidateProfile;
