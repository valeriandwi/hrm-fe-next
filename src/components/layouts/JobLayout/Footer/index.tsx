"use client";
import { Layout } from "antd";
import React from "react";

const { Footer: FooterLayout } = Layout;

const Footer = () => {
  return (
    <FooterLayout className="text-center bg-slate-100">
      WorkWave ©{new Date().getFullYear()} Created with ♡
    </FooterLayout>
  );
};

export default Footer;
