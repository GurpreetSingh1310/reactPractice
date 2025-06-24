import React from "react";

const Modal = ({ children,onClose }) => {
  return (
    <>
      <div >
        <dialog open className="modal" onClick={onClose}>{children}</dialog>
      </div>
    </>
  );
};

export default Modal;
