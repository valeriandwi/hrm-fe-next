"use client";
import MicrosoftIcon from "@/assets/microsoft-icon";
import {
  EyeFilled,
  GoogleCircleFilled,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Divider, Form, Input, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login: React.FC = () => {
  return (
    <div className="flex h-full flex-col p-32">
      <Typography className="font-bold text-2xl mb-8 text-color-primary-500">
        Welcome Back !
      </Typography>
      <Form className="w-full" layout="vertical">
        <Form.Item name="email">
          <Input
            size="large"
            placeholder="your@example.com"
            prefix={
              <MailOutlined className="bg-white p-2 mr-2 rounded-lg text-color-primary-500" />
            }
            className="bg-gray-100"
          />
        </Form.Item>
        <Form.Item name="password">
          <Input
            size="large"
            placeholder="at least 8 characters"
            className="bg-gray-100"
            prefix={
              <LockOutlined className="bg-white p-2 mr-2 rounded-lg text-color-primary-500" />
            }
            suffix={
              <Button
                type="link"
                className="text-color-primary-500"
                icon={<EyeFilled />}
              />
            }
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="w-full" size="large">
            Login
          </Button>
        </Form.Item>
      </Form>
      <Divider className="mb-4 text-gray-400">or</Divider>
      <div className="w-full grid grid-cols-2 gap-4">
        <Button
          type="default"
          className="border-gray-200 text-black font-semibold"
          size="large"
          icon={<FcGoogle />}
        >
          Google
        </Button>
        <Button
          type="default"
          className="border-gray-200 text-black font-semibold"
          size="large"
          icon={<MicrosoftIcon className="w-[16px]" />}
        >
          Microsoft Account
        </Button>
      </div>
      <Typography className="text-center mt-4 font-semibold">
        Don{"'"}t you have an account ? <Link href="#">Register Now</Link>
      </Typography>
    </div>
  );
};

export default Login;
