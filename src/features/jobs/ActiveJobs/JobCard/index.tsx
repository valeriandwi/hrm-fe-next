import { CheckCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Divider, Row, Typography } from "antd";
import Link from "next/link";
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
          <div className="my-2 p-4 bg-gray-100 rounded-sm flex w-full space-x-4">
            <div className="w-full border-r-2 border-gray-200">
              <Typography className="font-semibold text-gray-400">
                TOTAL
              </Typography>
              <Typography className="font-bold text-lg">10</Typography>
            </div>
            <div className="w-full">
              <Typography className="font-semibold text-gray-400">
                NEW
              </Typography>
              <Typography className="font-bold text-lg">10</Typography>
            </div>
          </div>
          <Divider />
          <div className="flex flex-row justify-between items-center">
            <div>
              <Typography className="text-green-500">
                <CheckCircleOutlined /> Published
              </Typography>
            </div>
            <div>
              <Link href="/jobs/detail">
                <Button type="link">
                  <div className="flex items-center gap-2">
                    See Details <RightOutlined />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default JobCard;
