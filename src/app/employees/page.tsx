"use client";
import React from "react";
import { Col, Row, Typography } from "antd";
import MainLayout from "@/components/layouts/MainLayout";
import EmployeeCard from "@/features/employees/EmployeeCard";

const { Title } = Typography;

const Employees: React.FC = () => {
  return (
    <MainLayout>
      <Title level={2}>Employees</Title>
      <Row gutter={24}>
        <Col span={6}>
          <EmployeeCard />
        </Col>
        <Col span={6}>
          <EmployeeCard />
        </Col>
        <Col span={6}>
          <EmployeeCard />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Employees;
