import { Drawer } from "antd";
import React from "react";

type AppDrawerProps = {
  title?: string;
  placement?: "left" | "right" | "top" | "bottom";
  onClose?: () => void;
  open: boolean;
  size?: "default" | "large";
  children: React.ReactNode;
  bodyStyle?: React.CSSProperties;
};

const AppDrawer: React.FC<AppDrawerProps> = ({
  title,
  placement = "left",
  onClose,
  open,
  children,
  size = "default",
  bodyStyle,
}) => {
  return (
    <Drawer
      title={title}
      placement={placement}
      closable={false}
      onClose={onClose}
      open={open}
      key={placement}
      size={size}
      bodyStyle={bodyStyle}
    >
      {children}
    </Drawer>
  );
};

export default AppDrawer;
