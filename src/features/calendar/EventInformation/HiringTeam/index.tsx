import { Avatar, Typography } from "antd";
import React from "react";

const HiringTeam = () => {
  return (
    <div className="flex flex-row gap-2">
      <Avatar size="large" src={`https://i.pravatar.cc/300?u=b`} />
      <div className="flex flex-col">
        <Typography className="!font-bold">X</Typography>
        <Typography className="!text-gray-500">x@company.com</Typography>
      </div>
    </div>
  );
};

export default HiringTeam;
