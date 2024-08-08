import { Button, Card, Divider, Table, Typography } from "antd";
import { columns } from "./constants/column";
import Link from "next/link";

const HiringPipeline = () => {
  const dummyData = [
    {
      jobs: {
        name: "Frontend Developer",
        total: 165,
      },
      newApplied: 34,
      screening: 10,
      interview: 10,
      test: 10,
      hired: 10,
    },
    {
      jobs: {
        name: "UI/UX Designer",
        total: 165,
      },
      newApplied: 34,
      screening: 10,
      interview: 10,
      test: 10,
      hired: 10,
    },
  ];

  return (
    <Card>
      <div className="flex flex-row justify-between items-center mb-8">
        <Typography className="font-bold text-lg">Hiring Pipeline</Typography>
        <Link href="/jobs" className="text-color-primary-500 hover:underline">
          View All Jobs
        </Link>
      </div>
      <Table
        className="pointer-events-none overflow-auto"
        pagination={false}
        size="small"
        columns={columns}
        dataSource={dummyData}
        bordered={false}
      />
    </Card>
  );
};

export default HiringPipeline;
