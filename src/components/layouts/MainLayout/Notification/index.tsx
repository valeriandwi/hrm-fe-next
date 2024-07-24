import AppDrawer from "@/components/shared/AppDrawer";
import useDrawer from "@/hooks/useDrawer";
import { BellOutlined } from "@ant-design/icons";
import { Badge, Button, Typography } from "antd";
import React from "react";
import NotificationList from "./NotificationList";

const Notification = () => {
  const [{ openDrawer }, toggleDrawer] = useDrawer();

  return (
    <>
      <Badge size="default" count={5}>
        <Button
          type="primary"
          shape="circle"
          onClick={toggleDrawer}
          icon={<BellOutlined />}
        />
      </Badge>
      <AppDrawer
        open={openDrawer}
        placement="right"
        size="default"
        onClose={toggleDrawer}
        bodyStyle={{ padding: "0px" }}
      >
        <NotificationList />
      </AppDrawer>
    </>
  );
};

export default Notification;
