import { Avatar, Layout } from "antd";
import React from "react";
import SiderLayout from "./Sider";
import Notification from "./Notification";

const { Header, Content } = Layout;

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className="flex flex-row min-h-[100vh]">
      <SiderLayout />
      <Layout>
        <Header className="w-full !bg-white">
          <div className="flex justify-end items-center h-full space-x-4">
            <Notification />
            <div className="justify-end items-center h-full flex flex-row">
              <Avatar>V</Avatar>
            </div>
          </div>
        </Header>
        <Content className="bg-[#F2F7FA] p-8">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
