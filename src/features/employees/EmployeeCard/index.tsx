import {
  EllipsisOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Card,
  Divider,
  Dropdown,
  MenuProps,
  Tag,
  Typography,
} from "antd";
import React from "react";

interface EmployeeCardProps {
  toggleDrawer: () => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ toggleDrawer }) => {
  const items: MenuProps["items"] = [
    {
      label: <div>Set as Inactive</div>,
      key: "0",
    },
    {
      label: <div>Delete</div>,
      key: "1",
    },
    {
      label: <div onClick={toggleDrawer}>View Profile</div>,
      key: "3",
    },
  ];

  return (
    <Card>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <Tag color="success">Active</Tag>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <div className="cursor-pointer" onClick={(e) => e.preventDefault()}>
              <EllipsisOutlined />
            </div>
          </Dropdown>
        </div>
        <div className="flex justify-center mb-2">
          <Avatar
            src={`https://i.pravatar.cc/300?u=aabc`}
            className="h-[75px] w-[75px]"
          />
        </div>
        <Typography className="font-bold text-center text-xl mb-0">
          John Doe
        </Typography>
        <Typography className="font-semibold text-center text-lg">
          Frontend Developer
        </Typography>
        <Card
          className="p-0 !mt-4 !bg-gray-back-color"
          style={{ padding: "0" }}
        >
          <div className="flex flex-row justify-between gap-2 p-4">
            <div className="flex flex-col w-full ">
              <Typography className="font-bold text-gray-500">
                Department
              </Typography>
              <Typography className="font-semibold">Design Team</Typography>
            </div>
            <div className="flex flex-col w-full">
              <Typography className="font-bold text-gray-500">
                Date Hired
              </Typography>
              <Typography className="font-semibold">Aug 20, 2023</Typography>
            </div>
          </div>
          <Divider className="w-full mt-2 mb-1" />
          <div className="p-4 flex flex-col gap-2">
            <Typography className="items-center font-semibold">
              <MailOutlined className="mr-2" />
              valerian.dwi.p@gmail.com
            </Typography>
            <Typography className="items-center font-semibold">
              <PhoneOutlined className="mr-2" />
              +62 89XXXXXXX
            </Typography>
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default EmployeeCard;
