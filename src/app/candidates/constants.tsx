import StagesIndicator from "@/components/shared/StagesIndicator";
import { Avatar, Typography } from "antd";

export const COLUMNS = [
  {
    title: "Candidate Name",
    dataIndex: "candidateName",
    key: "name",
    render: (value: string) => (
      <div className="flex flex-row items-center space-x-2">
        <Avatar src={`https://i.pravatar.cc/300?u=${value}abc`} />
        <Typography>{value}</Typography>
      </div>
    ),
  },
  {
    title: "Stages",
    dataIndex: "stages",
    key: "stages",
    render: (value: { name: string; number: number }) => (
      <>
        {value.name}
        <StagesIndicator currentStage={value.number} />
      </>
    ),
  },
  {
    title: "Applied Date",
    dataIndex: "appliedDate",
    key: "appliedDate",
  },
  {
    title: "Hired by",
    dataIndex: "hiredBy",
    key: "hiredBy",
    render: (value: string) => (
      <div className="flex flex-row items-center space-x-2">
        <Avatar src={`https://i.pravatar.cc/300?u=${value}abc`} />
        <Typography>{value}</Typography>
      </div>
    ),
  },
];
