import { Card, Col, Divider, Row, Tag, Typography } from "antd";
import React from "react";

const ProfessionalDetails: React.FC = () => {
  return (
    <Card style={{ padding: 0 }}>
      <div className="pt-2 px-4">
        <Typography className="font-bold">Professional Details</Typography>
      </div>
      <Divider className="!mt-2" />
      <div className="px-4 pb-4">
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <div className="mb-2">
              <Typography className="text-gray-500">Job Title</Typography>
              <Typography className="font-bold">Business Analysis</Typography>
            </div>
            <div className="mb-2">
              <Typography className="text-gray-500">Salary</Typography>
              <Typography className="font-bold">$5,000</Typography>
            </div>
            <div className="mb-2">
              <Typography className="text-gray-500">
                Year of Experience
              </Typography>
              <Typography className="font-bold">7 years</Typography>
            </div>
            <div className="mb-2">
              <Typography className="text-gray-500">Date Joined</Typography>
              <Typography className="font-bold">20 October 2023</Typography>
            </div>
          </Col>
          <Col span={12}>
            <div className="mb-2">
              <Typography className="text-gray-500">
                Highest Qualification Held
              </Typography>
              <Typography className="font-bold">
                Bachelor of Engineering
              </Typography>
            </div>
            <div className="mb-2">
              <Typography className="text-gray-500">Current Salary</Typography>
              <Typography className="font-bold">$4,000</Typography>
            </div>
            <div className="mb-2">
              <Typography className="text-gray-500">Skill Set</Typography>
              <Tag color="blue">Business Development</Tag>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default ProfessionalDetails;
