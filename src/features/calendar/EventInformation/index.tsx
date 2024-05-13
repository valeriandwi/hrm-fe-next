import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Button, Divider, Typography } from "antd";
import React from "react";
import CandidateAvatar from "./CandidateAvatar";
import InterviewLink from "./InterviewLink";
import HiringTeam from "./HiringTeam";

const EventInformation = () => {
  return (
    <div>
      <div className="bg-gray-500 pl-4 py-4">
        <Typography className="!text-white !text-xl">Event Details</Typography>
      </div>
      <div className="pt-2">
        <div className="px-4">
          <Typography className="!font-bold !mb-2">Lorem ipsum</Typography>
          <div className="flex flex-row gap-2">
            <div>
              <Typography className="!text-gray-500">
                <CalendarOutlined /> 13 May 2024
              </Typography>
            </div>
            <div>
              <Typography className="!text-gray-500">
                <ClockCircleOutlined /> 02:00 PM - 04:00 PM (2 hours)
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="px-4">
        <InterviewLink />
        <CandidateAvatar />
        <Divider />
        <HiringTeam />
        <Divider />
        <div>
          <Typography className="!font-bold">Instructions</Typography>
          <Typography>Lorem ipsum dolor sit amet</Typography>
        </div>
        <Divider />
        <div className="flex justify-end">
          <Button className="!bg-green-600 !text-white" size="large">
            Remind Candidate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventInformation;
