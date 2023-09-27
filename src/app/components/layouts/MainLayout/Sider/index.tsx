import React from "react";
import { Layout, Menu, MenuProps, Typography } from "antd";
import {
  CalendarOutlined,
  DashboardOutlined,
  LaptopOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";
import { PUBLIC_ROUTES } from "@/constants/routeList";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const SiderLayout: React.FC = () => {
  const pathname = usePathname();

  const getSelectedMenu = (): (string | undefined)[] => {
    if (pathname === "/") return ["dashboard"];
    const path = pathname.replace("/", "");
    return [PUBLIC_ROUTES.filter(({ key }) => key === path)[0]["key"]] || [];
  };

  const items: MenuProps["items"] = [
    getItem("Dashboard", "dashboard", <DashboardOutlined />),
    getItem("Calendar", "calendar", <CalendarOutlined />),
    {
      type: "group",
      label: "Recruitment",
      children: [],
    },
    getItem("Jobs", "jobs", <LaptopOutlined />),
    getItem("Candidates", "candidates", <UserOutlined />),
    {
      type: "group", // Must have
      label: "Organization",
      children: [],
    },
    { type: "divider" },
    getItem("Employees", "employees", <UserOutlined />),
    getItem("Report", "report", <PieChartOutlined />),
  ];

  return (
    <div>
      <Sider className="p-2 h-[100vh]">
        <div className="logo h-[50px]" />
        <Menu
          theme="dark"
          selectedKeys={getSelectedMenu() as string[]}
          mode="inline"
          className="flex flex-col"
          items={items}
        />
      </Sider>
    </div>
  );
};

export default SiderLayout;
