import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { NoContent } from "./NoContent";
import ConnectDatabase from "./databse/connectDatabse";
import CreateDatabase from "./databse/createDatabse";
import Modal from "../modal"; // Ensure the correct import path for Modal

export function Settings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState("create"); // 'create' or 'connect'
  const db = 0; // Example value

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentStep("create"); // Reset to 'create' step when modal is closed
  };

  const handleNext = () => {
    setCurrentStep("connect");
  };

  return (
    <div className="p-10 space-y-5">
      <div className="flex items-center space-x-3 text-xl font-semibold font-Montserrat">
        <p>Active Database Information</p>
        <IoAddCircleOutline
          onClick={openModal}
          className="text-gray-500 cursor-pointer"
          size={24}
        />
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <div className="transition-container">
          {currentStep === "create" && <CreateDatabase onNext={handleNext} />}
          {currentStep === "connect" && <ConnectDatabase />}
        </div>
      </Modal>

      {db < 1 && <NoContent />}

      <div className="flex items-center space-x-3 text-xl font-semibold font-Montserrat leading-7-24/3">
        <p>Repository</p>
        <IoAddCircleOutline
          className="text-gray-500 cursor-pointer"
          size={24}
        />
      </div>
    </div>
  );
}
