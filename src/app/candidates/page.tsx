"use client";
import MainLayout from "@/components/layouts/MainLayout";
import AppDrawer from "@/components/shared/AppDrawer";
import CandidateProfile from "@/features/Candidates/CandidateProfile";
import TableCandidates from "@/features/Candidates/Table";
import useDrawer from "@/hooks/useDrawer";
import { DatePicker, Typography } from "antd";
import React from "react";

const { RangePicker } = DatePicker;

const Candidates: React.FC = () => {
  const [{ openDrawer }, toggleDrawer] = useDrawer();

  return (
    <MainLayout>
      <div className="flex justify-between mb-6">
        <Typography className="text-2xl">1 Candidates</Typography>
        <div className="flex flex-row space-x-2 items-center">
          <Typography className="font-semibold">
            Filter by applied date :
          </Typography>
          <RangePicker picker="month" />
        </div>
      </div>
      <TableCandidates toggleDrawer={toggleDrawer} />
      <AppDrawer
        open={openDrawer}
        placement="right"
        size="large"
        onClose={toggleDrawer}
        bodyStyle={{ padding: "0px" }}
      >
        <CandidateProfile />
      </AppDrawer>
    </MainLayout>
  );
};

export default Candidates;
