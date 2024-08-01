"use client";
import React from "react";
import { Col, Row, Typography } from "antd";
import MainLayout from "@/components/layouts/MainLayout";
import EmployeeCard from "@/features/employees/EmployeeCard";
import useDrawer from "@/hooks/useDrawer";
import AppDrawer from "@/components/shared/AppDrawer";
import EmployeeInformation from "@/features/employees/EmployeeInformation";

const { Title } = Typography;

const Employees: React.FC = () => {
  const [{ openDrawer }, toggleDrawer] = useDrawer();

  return (
    <MainLayout>
      <Title level={2}>Employees</Title>
      <div className="flex justify-end">
        
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <EmployeeCard toggleDrawer={toggleDrawer} />
        </div>
        <div>
          <EmployeeCard toggleDrawer={toggleDrawer} />
        </div>
        <div>
          <EmployeeCard toggleDrawer={toggleDrawer} />
        </div>
      </div>
      <AppDrawer
        open={openDrawer}
        placement="right"
        size="large"
        onClose={toggleDrawer}
        style={{ padding: "0px" }}
      >
        <EmployeeInformation />
      </AppDrawer>
    </MainLayout>
  );
};

export default Employees;
