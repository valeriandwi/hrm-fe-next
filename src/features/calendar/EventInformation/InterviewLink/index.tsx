import { CopyOutlined, LoginOutlined } from "@ant-design/icons";
import { Button, Input, Space, Typography } from "antd";
import React from "react";

const InterviewLink = () => {
  return (
    <div className="flex flex-col mb-4">
      <div className="flex flex-col gap-1 w-full">
        <Typography className="!font-bold">Interview Link</Typography>
        <div className="flex flex-row">
          <Input
            defaultValue="Interview Link"
            disabled
            size="large"
            className="w-full rounded-l-md rounded-r-none"
          />
          <Button
            type="default"
            icon={<CopyOutlined />}
            size="large"
            className="rounded-l-none rounded-r-md"
          />
        </div>
      </div>
      <Button
        size="large"
        type="default"
        className="!mt-2"
        icon={<LoginOutlined />}
      >
        Go To Room
      </Button>
    </div>
  );
};

export default InterviewLink;
