import React from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Modal as ModalAria,
  DialogTriggerProps,
} from "react-aria-components";
import CloseIcon from "../../assets/images/closeIcon.svg?react";

interface ModalProps {
  isOpen: DialogTriggerProps["isOpen"];
  onOpenChange: DialogTriggerProps["onOpenChange"];
  modalTriggerElement?: React.ReactElement | null;
  modalChildElement: React.ReactElement;
}

export const Modal = ({
  isOpen,
  onOpenChange,
  modalTriggerElement = null,
  modalChildElement,
}: ModalProps) => {
  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={onOpenChange}>
      {modalTriggerElement}
      <ModalAria isDismissable>
        <Dialog>
          <Button className="modal-close-button" slot="close">
            <CloseIcon />
          </Button>
          <div className="modal-child-element">{modalChildElement}</div>
        </Dialog>
      </ModalAria>
    </DialogTrigger>
  );
};
