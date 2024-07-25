import { CopyOutlined } from "@ant-design/icons";
import { Button, Input, Space, Typography } from "antd";
import React from "react";

const InterviewLink = () => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <div className="flex flex-col gap-1 mb-4 w-full">
        <Typography className="!font-bold">Interview Link</Typography>
        <div className="flex flex-row">
          <Input
            defaultValue="Interview Link"
            disabled
            size="large"
            className="w-full"
          />
          <Button type="default" icon={<CopyOutlined />} size="large" />
        </div>
      </div>
      <Button size="large" type="default" className="!mt-2 ">
        Go To Room
      </Button>
    </div>
  );
};

export default InterviewLink;
