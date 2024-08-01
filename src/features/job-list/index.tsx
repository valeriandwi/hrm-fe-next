import Logo from "@/assets/logo";
import { Card, Typography } from "antd";
import React from "react";
import JobListTable from "./JobListTable";

const JobList = () => {
  return (
    <div className="px-16 pb-4">
      <div
        style={{ backgroundImage: "url('./job-list-bg.jpg')" }}
        className="min-h-[400px] w-full bg-center rounded-b-md"
      />
      <div className="mt-[-40px] flex flex-row justify-center">
        <Card className="w-3/4">
          <div className="flex justify-between">
            <Typography className="font-bold text-2xl">WorkWave</Typography>
            <div className="w-[120px]">
              <Logo color="#000" />
            </div>
          </div>
          <div className="grid grid-cols-3 mt-6 space-x-4">
            <div className="space-y-1">
              <Typography className="font-bold">Email</Typography>
              <Typography className="font-semibold">
                email@workwave.com
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="font-bold">Phone</Typography>
              <Typography className="font-semibold">+62 21500 100</Typography>
            </div>
            <div className="space-y-1">
              <Typography className="font-bold">Address</Typography>
              <Typography className="font-semibold">
                Jakarta, Indonesia
              </Typography>
            </div>
          </div>
          <Typography className="font-bold text-2xl my-4">
            Job Opportunity
          </Typography>
          <JobListTable />
        </Card>
      </div>
    </div>
  );
};

export default JobList;
