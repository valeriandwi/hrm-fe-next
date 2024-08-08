import { Modal, ModalProps } from "antd";
import ModalHeader from "./components/ModalHeader";
import clsx from "clsx";
import React from "react";
import useModal, { TModalState } from "./hooks/useModal";
import "./index.scss";

export type AppModalProps = {
  headerTitle?: string;
  defaultHeader?: boolean;
  title?: string;
  modal?: TModalState;
  toggleModal?: () => void;
  // onArrowBack?: (event: React.MouseEvent<HTMLSpanElement>) => void;
} & Omit<ModalProps, "title">;

const AppModal: React.FC<AppModalProps> & { useModal: typeof useModal } = ({
  defaultHeader = false,
  open = false,
  children,
  title,
  className,
  modal,
  onCancel,
  // onArrowBack,
  ...rest
}) => {
  const [childComponents, setChildComponents] = React.useState<
    React.ReactNode[] | string[]
  >([]);
  const childrenArray = React.Children.toArray(children);

  React.useEffect(() => {
    const components = childrenArray.map((child, index) => {
      if (typeof child === "string") return child;
      return React.cloneElement(child as React.ReactElement, {
        key: index,
        modalProps: modal,
      });
    });

    setChildComponents(components);
  }, [children]);

  const useCustomizedModalHeader = !defaultHeader && modal ? true : false;

  return (
    <Modal
      title={useCustomizedModalHeader ? null : title}
      maskClosable={useCustomizedModalHeader ? false : true}
      className={clsx("relative z-[50] max-w-[376px]", className)}
      destroyOnClose
      closable={false}
      footer={null}
      open={open || modal?.isOpen}
      onCancel={onCancel || modal?.onCancel}
      {...rest}
    >
      {useCustomizedModalHeader ? (
        <ModalHeader modal={modal} label={title || ""} />
      ) : null}
      {childComponents}
    </Modal>
  );
};

AppModal.useModal = useModal;

export default AppModal;
