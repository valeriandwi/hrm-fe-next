import { Modal, ModalFuncProps } from "antd";
import React from "react";
import DefaultContent from "../components/DefaultContent";
import AppDialog, { AppDialogProps } from "../../AppDialog";

export type TModalState = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onCancel: () => void;
} & TModalActions;

export type TDialogFunc = {
  onOk?: () => void;
  onCancel?: () => void;
};

export type OnToggleDialogModalType = (
  dialogProps: Omit<AppDialogProps, "modal">,
  modalConfig?: ModalFuncProps
) => void;

export type OnToggleConfirmationDialogModal = (
  dialogFunc?: TDialogFunc,
  modalConfig?: Omit<ModalFuncProps, "content"> & {
    content?: React.ReactNode;
    descBox?: {
      title?: string | React.ReactNode;
      desc?: string | React.ReactNode;
    };
    desc?: string | React.ReactNode;
  }
) => void;

export type TModalActions = {
  toggleModal: () => void;
  onToggleDialogModal: OnToggleDialogModalType;
  onToggleConfirmationDialogModal: OnToggleConfirmationDialogModal;
};

export type TModal = [TModalState, TModalActions];

const useModal = (): TModal => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const onCancel = () => setIsOpen(false);

  const onToggleDialogModal: TModalActions["onToggleDialogModal"] = (
    dialogProps,
    modalConfig
  ) => {
    const dialogModal = Modal.info(null);

    const DEFAULT_CONFIG: ModalFuncProps = {
      closable: false,
      maskClosable: true,
      icon: null,
      footer: null,
      content: <AppDialog modal={dialogModal} {...dialogProps} />,
    };

    dialogModal.update((prevConfig) => ({
      ...prevConfig,
      ...DEFAULT_CONFIG,
      ...modalConfig,
    }));
  };

  const onToggleConfirmationDialogModal: TModalActions["onToggleConfirmationDialogModal"] =
    (dialogFunc, modalConfig) => {
      const confirmationDialogModal = Modal.confirm({
        icon: null,
        closable: false,
        title: "Are you sure you want to continue this process",
        footer: null,
        className: "custom-default-content",
        ...modalConfig,
        content: (
          <DefaultContent
            destroy={() => confirmationDialogModal?.destroy()}
            onCancel={dialogFunc?.onCancel}
            onOk={dialogFunc?.onOk}
            footer={null}
            {...modalConfig}
          />
        ),
      });
    };

  const modalProps = {
    isOpen,
    setIsOpen,
    onCancel,
    toggleModal,
    onToggleDialogModal,
    onToggleConfirmationDialogModal,
  };

  return [
    modalProps,
    {
      toggleModal,
      onToggleDialogModal,
      onToggleConfirmationDialogModal,
    },
  ];
};

export default useModal;
