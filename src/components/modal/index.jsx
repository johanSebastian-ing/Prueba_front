import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg relative max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[12px] font-bold"
        >
          X
        </button>
        <div className="pt-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
