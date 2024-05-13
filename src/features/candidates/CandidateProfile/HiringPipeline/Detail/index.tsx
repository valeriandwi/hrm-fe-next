import { Avatar, Card, Col, Divider, Row, Tag, Typography } from "antd";
import React from "react";

const HiringDetail: React.FC = () => {
  return (
    <Card bodyStyle={{ padding: 0 }} className="mb-4">
      <div className="flex justify-between p-4">
        <Typography className="font-bold">Detail</Typography>
      </div>
      <Divider className="!mt-2" />
      <div className="px-4 pb-4">
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <div className="mb-2">
              <Typography className="text-gray-500">Status</Typography>
              <Typography className="font-bold">
                <Tag color="green">Active</Tag>
              </Typography>
            </div>
            <div className="mb-2">
              <Typography className="text-gray-500">Stage</Typography>
              <Typography className="font-bold">Interview</Typography>
            </div>
            <div className="mb-2">
              <Typography className="text-gray-500">Applied Date</Typography>
              <Typography className="font-bold">15 June 2023</Typography>
            </div>
          </Col>
          <Col span={12}>
            <div className="mb-2">
              <Typography className="text-gray-500">Assignee</Typography>
              <div className="font-bold flex flex-row items-center space-x-2">
                <Avatar />
                <Typography>John Doe</Typography>
              </div>
            </div>
            <div className="mb-2">
              <Typography className="text-gray-500">Phone</Typography>
              <Typography className="font-bold">+62 8123456789</Typography>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default HiringDetail;
