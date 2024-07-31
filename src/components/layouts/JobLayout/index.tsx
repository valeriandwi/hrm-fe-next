import { Layout } from "antd";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Content } from "antd/es/layout/layout";

interface JobLayoutProps {
  children: React.ReactNode;
}

const JobLayout: React.FC<JobLayoutProps> = ({ children }) => {
  return (
    <Layout className="flex min-h-[100vh]">
      <Header />
      <Content className={"min-h-[calc(100vh - 48px)]"}>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default JobLayout;
