import { CheckOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Button, Card, Typography } from "antd";
import React from "react";
import ScheduleItem from "./ScheduleItem";

const Schedule: React.FC = () => {
  const dummyData = [
    {
      id: "abcde",
      startTime: "08:00",
      endTime: "10:00",
      taskDescription: "Interview with John Doe",
      category: "Interview",
      status: "Done",
    },
    {
      id: "abcde2",
      startTime: "08:00",
      endTime: "10:00",
      taskDescription: "Interview with John Doe",
      category: "Interview",
      status: "Done",
    },
    {
      id: "abcde3",
      startTime: "08:00",
      endTime: "10:00",
      taskDescription: "Interview with John Doe",
      category: "Interview",
      status: "Done",
    },
    {
      id: "abcde4",
      startTime: "08:00",
      endTime: "10:00",
      taskDescription: "Interview with John Doe",
      category: "Interview",
      status: "Done",
    },
    {
      id: "abcde5",
      startTime: "08:00",
      endTime: "10:00",
      taskDescription: "Interview with John Doe",
      category: "Interview",
      status: "Done",
    },
  ];

  return (
    <Card>
      <Typography className="font-bold text-xl mb-4">
        Today Schedules
      </Typography>
      {dummyData.map(
        ({ id, startTime, endTime, taskDescription, category, status }) => (
          <ScheduleItem key={id} />
        )
      )}
    </Card>
  );
};

export default Schedule;
