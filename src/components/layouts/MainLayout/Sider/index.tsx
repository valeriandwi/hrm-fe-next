import React from "react";
import { Layout, Menu, MenuProps, Typography } from "antd";
import {
  CalendarOutlined,
  DashboardOutlined,
  LaptopOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
import { PUBLIC_ROUTES } from "@/constants/routeList";
import Logo from "../../../../assets/logo";

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
  const { push } = useRouter();

  const getSelectedMenu = (): (string | undefined)[] => {
    if (pathname === "/") return ["dashboard"];
    const path = pathname.replace("/", "");
    return [PUBLIC_ROUTES?.filter(({ key }) => key === path)[0]?.["key"]] || [];
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
    <Sider className="p-2 min-h-[100vh] bg-[#1c212d]">
      <Logo className="mb-4 p-4" />
      <Menu
        onClick={(e) => push("/" + e.key)}
        theme="dark"
        selectedKeys={getSelectedMenu() as string[]}
        mode="inline"
        className="flex flex-col"
        items={items}
      />
    </Sider>
  );
};

export default SiderLayout;
