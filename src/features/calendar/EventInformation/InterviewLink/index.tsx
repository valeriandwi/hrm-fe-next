import { CopyOutlined } from "@ant-design/icons";
import { Button, Input, Space, Typography } from "antd";
import React from "react";

const InterviewLink = () => {
  return <div className="flex flex-row gap-4 items-center">
  <div className="flex flex-col gap-1 mb-4 w-[75%]">
    <Typography className="!font-bold">Interview Link</Typography>
    <Space.Compact style={{ width: "100%" }}>
      <Input
        defaultValue="Combine input and button"
        disabled
        size="large"
      />
      <Button type="default" icon={<CopyOutlined />} size="large" />
    </Space.Compact>
  </div>
  <Button size="large" type="primary" className="!mt-2 !bg-green-600">
    Go To Room
  </Button>
</div>;
};

export default InterviewLink;
