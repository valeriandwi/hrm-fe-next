import React from "react";
import JobCard from "./JobCard";
import { Typography } from "antd";

const ActiveJobs: React.FC = () => {
  return (
    <div>
      <Typography className="text-2xl mb-6 mt-3">7 Active Jobs</Typography>
      <JobCard />
    </div>
  );
};

export default ActiveJobs;
