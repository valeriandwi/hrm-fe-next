"use client";

import Logo from "@/assets/logo";
import { Layout } from "antd";
import React from "react";

const { Header: LayoutHeader } = Layout;

const Header = () => {
  return (
    <LayoutHeader
      style={{ display: "flex", alignItems: "center" }}
      className="w-full bg-white shadow-md"
    >
      <div className="w-[120px]">
        <Logo color="#000" />
      </div>
    </LayoutHeader>
  );
};

export default Header;
