"use client";
import MainLayout from "@/components/layouts/MainLayout";
import Candidates from "@/features/jobs/JobDetail/Candidates";
import HiringTeam from "@/features/jobs/JobDetail/HiringTeam";
import JobDetails from "@/features/jobs/JobDetail/JobDetail";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { Button, Tabs, TabsProps } from "antd";
import Typography from "antd/es/typography/Typography";
import React from "react";

const JobDetail: React.FC = () => {
  const items: TabsProps["items"] = [
    {
      key: "candidates",
      label: `CANDIDATES`,
      children: <Candidates />,
    },
    {
      key: "jobDetails",
      label: `JOB DETAILS`,
      children: <JobDetails />,
    },
    {
      key: "hiringTeam",
      label: `HIRING TEAM`,
      children: <HiringTeam />,
    },
  ];

  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <Typography className="text-gray-500 font-semibold">
            PRODUCT
          </Typography>
          <Typography className="text-xl font-semibold">
            Application Developer
          </Typography>
        </div>
        <div>
          <Button danger type="primary" icon={<EyeInvisibleOutlined />}>
            Unpublish
          </Button>
        </div>
      </div>
      <Tabs defaultActiveKey="1" items={items} />
    </MainLayout>
  );
};

export default JobDetail;
