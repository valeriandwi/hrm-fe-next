"use client";
import { Layout } from "antd";
import React from "react";

const { Content } = Layout;

type FrontLayoutProps = {
  children: React.ReactNode;
};

const FrontLayout: React.FC<FrontLayoutProps> = ({ children }) => {
  return (
    <Layout className="flex flex-row min-h-[100vh]">
      <Content className="bg-white grid grid-cols-2">
        <div className="w-full bg-[#F5F6F8]" />
        {children}
      </Content>
    </Layout>
  );
};

export default FrontLayout;
