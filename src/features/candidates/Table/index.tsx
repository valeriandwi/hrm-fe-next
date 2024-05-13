import { COLUMNS } from "@/app/candidates/constants";
import { Table } from "antd";
import React from "react";

type TableCandidatesProps = {
  toggleDrawer: () => void;
};

const TableCandidates: React.FC<TableCandidatesProps> = ({ toggleDrawer }) => {
  const dummyData = [
    {
      key: "0",
      candidateName: "Valerian",
      stages: {
        name: "Screening",
        number: 2,
      },
      appliedDate: "2023-02-28",
      hiredBy: "HR",
    },
  ];
  return (
    <Table
      columns={COLUMNS}
      dataSource={dummyData}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            toggleDrawer();
          },
        };
      }}
    />
  );
};

export default TableCandidates;
