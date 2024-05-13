import { Button } from "antd";
import { ButtonProps } from "antd/lib/button/button";
import clsx from "clsx";
import React from "react";

interface AppButtonProps {
  children: React.ReactNode;
  type?: string;
  className?: string;
  [x: string]: any;
  id?: string;
}

const AppButton: React.FC<AppButtonProps & ButtonProps> = ({
  children,
  type = "primary",
  className,
  id,
  ...rest
}) => {
  return (
    <Button
      id={`${id}-btn`}
      className={clsx(
        "my-[10px] text-xs leading-4 rounded-md font-semibold border-primary-50-color",
        type === "primary"
          ? "bg-primary-50-color text-white-color hover:text-primary-50-color hover:bg-white-color hover:border-primary-50-color"
          : "bg-white-color text-primary-50-color hover:bg-white-color hover:text-primary-50-color hover:border-primary-50-color",
        className
      )}
      htmlType="submit"
      {...rest}
    >
      {children}
    </Button>
  );
};

export default AppButton;
