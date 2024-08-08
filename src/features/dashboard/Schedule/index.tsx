import { Card, Typography } from "antd";
import React from "react";
import ScheduleItem from "./ScheduleItem";
import Link from "next/link";

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
      <div className="flex justify-between">
        <Typography className="font-bold text-xl mb-4">
          Today Schedules
        </Typography>
        <Link
          href="/calendar"
          className="text-color-primary-500 hover:underline"
        >
          View All
        </Link>
      </div>
      {dummyData.map(
        ({ id, startTime, endTime, taskDescription, category, status }) => (
          <ScheduleItem key={id} />
        )
      )}
    </Card>
  );
};

export default Schedule;
