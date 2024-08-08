import { CheckOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import React from "react";

interface ScheduleItemProps {}

const ScheduleItem: React.FC<ScheduleItemProps> = () => {
  return (
    <div className="border px-4 py-2 rounded-md border-gray-200 border-l-4 border-l-red-400 mb-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-8">
          <Typography>
            <ClockCircleOutlined className="mr-[6px]" />
            08:00 - 10:00
          </Typography>
          <Typography className="text-gray-500">
            Interview with John Doe
          </Typography>
        </div>
        <Button
          size="small"
          icon={<CheckOutlined />}
          className="hover:bg-color-primary-100"
        />
      </div>
    </div>
  );
};

export default ScheduleItem;
