import { Avatar, Card, Col, Row, Typography } from "antd";
import React from "react";

const InterviewCard: React.FC = () => {
  return (
    <div>
      <Typography>Mar 16 2023 (Tuesday)</Typography>
      <Card>
        <Row gutter={[12, 12]}>
          <Col span={8}>
            <div className="flex flex-row space-x-2 items-center">
              <Avatar size="large" />
              <div className="flex flex-col">
                <Typography className="font-bold">John Doe</Typography>
                <Typography className="text-gray-500">Written Test</Typography>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="flex flex-row space-x-2 items-center">
              <div className="flex flex-col">
                <Typography className="font-bold">3:30 PM - 4:00 PM</Typography>
                <Typography className="text-gray-500">
                  1 Hour Interview
                </Typography>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="flex flex-row space-x-2 items-center">
              <div className="flex flex-col">
                <Typography className="font-bold">Link Meeting</Typography>
                <Typography className="text-gray-500">
                  Scheduled By : <b>Unknown</b>
                </Typography>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default InterviewCard;
