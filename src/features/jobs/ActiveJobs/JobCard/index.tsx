import { CheckCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Divider, Row, Typography } from "antd";
import React from "react";

const JobCard: React.FC = () => {
  return (
    <Row>
      <Col span={6}>
        <Card className="!border-t-2 !border-t-green-500">
          <Typography className="text-gray-400 font-semibold">
            DEVELOPMENT
          </Typography>
          <Typography className="font-semibold">Product Manager</Typography>
          <div className="my-2 p-4 bg-gray-100 rounded-sm">
            <Row>
              <Col span={12}>
                <Typography className="font-semibold text-gray-400">
                  TOTAL
                </Typography>
                <Typography className="font-bold text-lg">10</Typography>
              </Col>
              <Col span={12} className="border-x-red-color border-x-2">
                <Typography className="font-semibold text-gray-400">
                  NEW
                </Typography>
                <Typography className="font-bold text-lg">10</Typography>
              </Col>
            </Row>
          </div>
          <Divider />
          <div className="flex flex-row justify-between items-center">
            <div>
              <Typography className="text-green-500">
                <CheckCircleOutlined /> Published
              </Typography>
            </div>
            <div>
              <Button type="link">
                <div className="flex items-center gap-2">
                  See Details <RightOutlined />
                </div>
              </Button>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default JobCard;
