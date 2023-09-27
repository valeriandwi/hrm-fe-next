import { Avatar, Layout } from "antd";
import React from "react";
import SiderLayout from "./Sider";

const { Header, Content } = Layout;

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className="h-[100vh] w-full">
      <SiderLayout />
      <Layout>
        <Header className="w-full !bg-white">
          <div className="justify-end items-center h-full flex flex-row">
            <Avatar>V</Avatar>
          </div>
        </Header>
        <Content className="bg-[#F2F7FA] p-8">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
