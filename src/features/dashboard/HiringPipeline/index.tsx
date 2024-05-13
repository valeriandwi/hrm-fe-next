import { Button, Card, Divider, Table, Typography } from "antd";
import { columns } from "./constants/column";

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
      <div className="flex flex-row justify-between items-center">
        <Typography className="font-bold text-lg">Hiring Pipeline</Typography>
        <Button>View All Jobs</Button>
      </div>
      <Divider className="mb-3 mt-4" />
      <Table
        className="pointer-events-none"
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
