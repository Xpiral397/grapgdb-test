// import React from "react";
// import { FaRegUser, FaUser, FaUserAlt } from "react-icons/fa";
import { useTab } from "../context/localContext";

function Navbar() {
  const { currentTab } = useTab();

  return (
    <div className="p-12 flex justify-between items-center font-[600]  text-slate-800 ">
      <div className="text-xl font-semibold">{currentTab}</div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <span className="text-gray-500">한국어</span>
        </div>
        <div className="w-[.015rem] h-5 bg-slate-900"></div>
        <div className="flex items-center space-x-3">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <!-- Circle representing the head --> */}
            <path
              d="M8 7.5C9.84091 7.5 11.3333 6.00762 11.3333 4.16667C11.3333 2.32572 9.84091 0.833336 8 0.833336C6.15909 0.833336 4.66667 2.32572 4.66667 4.16667C4.66667 6.00762 6.15909 7.5 8 7.5Z"
              stroke="#737B7D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            {/* <!-- Arc representing the body/shoulders --> */}
            <path
              d="M14.6667 14.5V12.8333C14.6667 11.9493 14.3155 11.1014 13.6904 10.4763C13.0653 9.85119 12.2174 9.5 11.3334 9.5H4.66671C3.78265 9.5 2.93481 9.85119 2.30968 10.4763C1.68456 11.1014 1.33337 11.9493 1.33337 12.8333V14.5"
              stroke="#737B7D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>username</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
