import React from "react";
import { DIALOG_CONTENTS } from "./constants";
import { Button } from "antd";

export type AppDialogProps = {
  type: "SUCCESS" | "FAIL";
  modal?: {
    destroy: () => void;
  };
  icon?: React.ReactNode;
  message?: string;
  description?: string;
  confirmButton?: boolean;
};

const AppDialog: React.FC<AppDialogProps> = ({
  type,
  icon,
  description,
  message,
  confirmButton = true,
  modal,
}) => {
  const onDestroyModal = () => modal.destroy();

  return (
    <div className="flex flex-col justify-center items-center py-5">
      {icon || DIALOG_CONTENTS[type].defaultIcon}
      <span className="font-bold text-xl">
        {message || DIALOG_CONTENTS[type].defaultMessage}
      </span>
      {description}
      {confirmButton ? (
        <Button onClick={onDestroyModal} type="primary" className="w-full mt-5">
          OK
        </Button>
      ) : null}
    </div>
  );
};

export default AppDialog;
