"use client";
import { Button, Table, Typography } from "antd";
import React from "react";
import { dummyData } from "../dummyData";
import { EnvironmentOutlined } from "@ant-design/icons";
import AppDrawer from "@/components/shared/AppDrawer";
import useDrawer from "@/hooks/useDrawer";
import JobDescription from "../JobDescription";

const JobListTable = () => {
  const [{ openDrawer }, toggleDrawer] = useDrawer();

  const columns = [
    {
      key: "role",
      title: "Role",
      dataIndex: "role",
      render: (value: string) => (
        <>
          <Typography>{value}</Typography>
          <Typography className="text-gray-400">Full Time</Typography>
        </>
      ),
    },
    { key: "experiences", title: "Experiences", dataIndex: "experiences" },
    {
      key: "location",
      title: "Location",
      dataIndex: "location",
      render: (value: string) => (
        <Typography className="flex flex-row space-x-1">
          <EnvironmentOutlined />
          <span>{value}</span>
        </Typography>
      ),
    },
    { key: "lastUpdated", title: "Last Updated", dataIndex: "lastUpdated" },
    {
      key: "action",
      dataIndex: "action",
      render: (value: any) => (
        <Button type="primary" size="large">
          Apply
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table
        rowHoverable
        rowClassName={"hover:cursor-pointer"}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              toggleDrawer();
            },
          };
        }}
        columns={columns}
        dataSource={dummyData}
      />
      <AppDrawer
        open={openDrawer}
        placement="right"
        size="large"
        onClose={toggleDrawer}
        style={{ padding: "0px" }}
      >
        <JobDescription />
      </AppDrawer>
    </>
  );
};

export default JobListTable;
