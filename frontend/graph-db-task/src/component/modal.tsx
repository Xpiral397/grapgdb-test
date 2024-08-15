import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  return (
    <div
      className={`bg-[#363740] -top-20 bg-opacity-80 fixed inset-0 flex items-center justify-center  transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={closeModal}
    >
      <div
        className={`bg-white rounded-lg p-6 max-w-3xl w-full transform transition-transform duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="close absolute bg-green-50 rounded-full flex items-center w-5 h-5 top-2 text-center right-2 text-gray-500 cursor-pointer"
          onClick={closeModal}
        >
          <span className="mx-[3.3px] mb-[5px]">&times;</span>
        </span>
        <div className="p-2 text-sm">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
