import React from "react";
import { TDialogFunc } from "../../hooks/useModal";
import AppButton from "../../../AppButton";

export type DefaultContentProps = {
  desc?: string | React.ReactNode;
  descBox?: {
    title?: string | React.ReactNode;
    desc?: string | React.ReactNode;
  };
  content?: React.ReactNode;
  okText?: React.ReactNode | string;
  cancelText?: React.ReactNode | string;
  destroy?: () => void;
  footer?: React.ReactNode | boolean;
} & Partial<TDialogFunc>;

const DefaultContent: React.FC<DefaultContentProps> = ({
  desc,
  descBox,
  content,
  okText = "OK",
  cancelText = "Cancel",
  onCancel,
  onOk,
  destroy,
  footer,
}) => {
  const onClickCancel = () => {
    if (onCancel) onCancel();
    destroy();
  };

  const onClickOk = () => {
    if (onOk) onOk();
    destroy();
  };

  return (
    <>
      <div className="flex flex-col gap-4 mb-4">
        <p>{desc}</p>
        {!content && (!descBox?.title || !descBox?.desc) ? null : (
          <div className="p-4 border-[1px] border-gray-300 flex flex-col gap-4">
            {content ? (
              content
            ) : (
              <div>
                <p className="font-bold text-[18px]">{descBox?.title}</p>
                <p className="text-[16px]">{descBox?.desc}</p>
              </div>
            )}
          </div>
        )}
      </div>
      {footer ? (
        footer
      ) : (
        <div className="flex">
          <AppButton
            onClick={onClickCancel}
            className="w-full mx-1 bg-transparent text-primary-100 hover:text-primary-300 border-primary-100"
            type="default"
          >
            {cancelText}
          </AppButton>
          <AppButton onClick={onClickOk} className="w-full mx-1">
            {okText}
          </AppButton>
        </div>
      )}
    </>
  );
};

export default DefaultContent;
