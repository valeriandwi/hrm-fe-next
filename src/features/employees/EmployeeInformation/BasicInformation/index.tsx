import { Card, Col, Divider, Row, Typography } from "antd";
import React from "react";

const BasicInformation: React.FC = () => {
  return (
    <Card style={{ padding: 0 }}>
      <div className="pt-2 px-4">
        <Typography className="font-bold">Basic Information</Typography>
      </div>
      <Divider className="!mt-2" />
      <div className="px-4 pb-4">
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <div className="mb-2">
              <Typography className="text-gray-500">Name</Typography>
              <Typography className="font-bold">Candidate Name</Typography>
            </div>
            <div className="mb-2">
              <Typography className="text-gray-500">Origin</Typography>
              <Typography className="font-bold">Sourced</Typography>
            </div>
            <div className="mb-2">
              <Typography className="text-gray-500">Candidate ID</Typography>
              <Typography className="font-bold">C0001</Typography>
            </div>
            <div className="mb-2">
              <Typography className="text-gray-500">Address</Typography>
              <Typography className="font-bold">
                3511 Saints Alley, Plant City
              </Typography>
            </div>
          </Col>
          <Col span={12}>
            <div className="mb-2">
              <Typography className="text-gray-500">Email</Typography>
              <Typography className="font-bold">candidate@email.com</Typography>
            </div>
            <div className="mb-2">
              <Typography className="text-gray-500">Phone</Typography>
              <Typography className="font-bold">+62 8123456789</Typography>
            </div>
            <div className="mb-2">
              <Typography className="text-gray-500">Birth Date</Typography>
              <Typography className="font-bold">27 February 1997</Typography>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default BasicInformation;
