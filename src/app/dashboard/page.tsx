"use client";
import MainLayout from "@/components/layouts/MainLayout";
import EmployeesInfo from "@/features/dashboard/EmployeesInfo";
import HiringPipeline from "@/features/dashboard/HiringPipeline";
import JobSummary from "@/features/dashboard/JobSummary";
import Schedule from "@/features/dashboard/Schedule";
import { Col, Row, Typography } from "antd";
import React from "react";

const { Title } = Typography;

const DashboardPage = () => {
  return (
    <MainLayout>
      <Title level={2}>Dashboard</Title>
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <HiringPipeline />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="w-full">
            <JobSummary />
          </div>
          <div className="w-full flex flex-col gap-4">
            <EmployeesInfo />
            <Schedule />
          </div>
        </div>

        <div className="w-full"></div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
