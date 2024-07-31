import JobLayout from "@/components/layouts/JobLayout";
import JobList from "@/features/job-list";
import React from "react";

const JobListPage = () => {
  return (
    <JobLayout>
      <JobList />
    </JobLayout>
  );
};

export default JobListPage;
