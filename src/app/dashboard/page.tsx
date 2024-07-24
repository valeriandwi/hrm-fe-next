"use client";
import MainLayout from "@/components/layouts/MainLayout";
import EmployeesInfo from "@/features/dashboard/EmployeesInfo";
import HiringPipeline from "@/features/dashboard/HiringPipeline";
import { Col, Row, Typography } from "antd";
import React from "react";

const { Title } = Typography;

const DashboardPage = () => {
  return (
    <MainLayout>
      <Title level={2}>Dashboard</Title>
      <Row gutter={16}>
        <Col lg={16} md={16}>
          <HiringPipeline />
        </Col>
        <Col lg={8} md={16}>
          <EmployeesInfo />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default DashboardPage;
