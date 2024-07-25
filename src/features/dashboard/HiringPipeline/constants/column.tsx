import { Typography } from "antd";
import { ColumnsType } from "antd/es/table";

export const columns: ColumnsType<any> = [
  {
    title: "Jobs",
    dataIndex: "jobs",
    key: "jobs",
    render: (value: any) => (
      <>
        <Typography className="font-semibold">{value.name}</Typography>
        <Typography className="font-medium">
          <span className="text-gray-500 font-normal">
            Total Applicants : {value.total}
          </span>
        </Typography>
      </>
    ),
  },
  {
    title: "New Applied",
    dataIndex: "newApplied",
    key: "newApplied",
    className: "!text-center",
    render: (value: any) => (
      <div className="bg-[#97B4B1] !p-2 rounded-lg">
        <Typography className="text-white-color">{value} candidates</Typography>
      </div>
    ),
  },
  {
    title: "Screening",
    dataIndex: "screening",
    key: "screening",
    className: "!text-center",
    render: (value: any) => (
      <div className="bg-[#3E726F] !p-2 rounded-lg">
        <Typography className="text-white-color">{value} candidates</Typography>
      </div>
    ),
  },
  {
    title: "Interview",
    dataIndex: "interview",
    key: "interview",
    className: "!text-center",
    render: (value: any) => (
      <div className="bg-[#FB8E02] !p-2 rounded-lg">
        <Typography className="text-white-color">{value} candidates</Typography>
      </div>
    ),
  },
  {
    title: "Test",
    dataIndex: "test",
    key: "test",
    className: "!text-center",
    render: (value: any) => (
      <div className="bg-[#C579CE] !p-2 rounded-lg">
        <Typography className="text-white-color">{value} candidates</Typography>
      </div>
    ),
  },
  {
    title: "Hired",
    dataIndex: "hired",
    key: "hired",
    className: "!text-center",
    render: (value: any) => (
      <div className="bg-[#A6C78D] !p-2 rounded-lg">
        <Typography className="text-white-color">{value} candidates</Typography>
      </div>
    ),
  },
];
