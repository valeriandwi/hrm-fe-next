"use client";
import MainLayout from "@/components/layouts/MainLayout";
import ActiveJobs from "@/features/jobs/ActiveJobs";
import InactiveJobs from "@/features/jobs/InactiveJobs";
import { Tabs, TabsProps } from "antd";
import React from "react";

const Jobs: React.FC = () => {
  const items: TabsProps["items"] = [
    {
      key: "activeJobs",
      label: `ACTIVE JOBS`,
      children: <ActiveJobs />,
    },
    {
      key: "inactiveJobs",
      label: `INACTIVE JOBS`,
      children: <InactiveJobs />,
    },
  ];

  return (
    <MainLayout>
      <Tabs defaultActiveKey="1" items={items} />
    </MainLayout>
  );
};

export default Jobs;
