import {
  Avatar,
  Button,
  Tabs,
  TabsProps,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import React from "react";
import {
  DeleteOutlined,
  LeftOutlined,
  MailOutlined,
  RightOutlined,
  UserSwitchOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import DetailProfile from "./DetailProfile";

const EmployeeInformation: React.FC = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Details`,
      children: <DetailProfile />,
    },
  ];

  return (
    <div>
      <div className="flex flex-row justify-between w-full p-4 bg-slate-100">
        <div className="flex space-x-2">
          <Button icon={<LeftOutlined />} />
          <Button icon={<RightOutlined />} />
        </div>
        <div className="flex space-x-2">
          <Tooltip title="Inactive">
            <Button icon={<UserSwitchOutlined />} />
          </Tooltip>
          <Tooltip title="Delete">
            <Button icon={<DeleteOutlined />} />
          </Tooltip>
          <Tooltip title="Send Mail">
            <Button icon={<MailOutlined />} />
          </Tooltip>
          <Tooltip title="Whatsapp">
            <Button icon={<WhatsAppOutlined />} />
          </Tooltip>
        </div>
      </div>
      <div className="flex mb-2 bg-slate-100 h-full p-4">
        <div className="flex justify-between w-full">
          <div className="flex">
            <Avatar
              size="large"
              className="h-[80px] w-[80px] mr-4"
              src={"https://i.pravatar.cc/300?u=${value}abc"}
            />
            <div>
              <div className="flex text-lg">
                <Typography className="text-lg font-bold">Candidate</Typography>
                <div className="ml-2 h-full">
                  <Tag color="green" className="h-full">
                    Active
                  </Tag>
                </div>
              </div>
              <div>
                <Typography className="text-gray-400 mb-1">Designer</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pl-4 pr-4 pb-4">
        <Tabs items={items} size="large" defaultActiveKey="1" />
      </div>
    </div>
  );
};

export default EmployeeInformation;
