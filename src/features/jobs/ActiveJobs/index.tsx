"use client";
import React from "react";
import JobCard from "./JobCard";
import { Button, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useDrawer from "@/hooks/useDrawer";
import AppDrawer from "@/components/shared/AppDrawer";
import JobForm from "../JobForm";
import withAddJobForm from "../hocs/withAddJobForm";

const AddJobForm = withAddJobForm(JobForm);

const ActiveJobs: React.FC = () => {
  const [{ openDrawer }, toggleDrawer] = useDrawer();

  return (
    <div>
      <div className="flex justify-between">
        <Typography className="text-2xl mb-6 mt-3">7 Active Jobs</Typography>
        <Button type="primary" icon={<PlusOutlined />} onClick={toggleDrawer}>
          Add Job
        </Button>
      </div>
      <JobCard />
      <AppDrawer
        open={openDrawer}
        placement="right"
        size="large"
        onClose={toggleDrawer}
        style={{ padding: "0px" }}
      >
        <AddJobForm />
      </AppDrawer>
    </div>
  );
};

export default ActiveJobs;
