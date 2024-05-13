import { Avatar, Typography } from "antd";
import React from "react";

const CandidateAvatar = () => {
  return (
    <div className="flex flex-row gap-2">
      <Avatar size="large" src={`https://i.pravatar.cc/300?u=a`} />
      <div className="flex flex-col">
        <Typography className="!font-bold">Valerian</Typography>
        <Typography className="!text-gray-500">
          Frontend Web Developer
        </Typography>
      </div>
    </div>
  );
};

export default CandidateAvatar;
