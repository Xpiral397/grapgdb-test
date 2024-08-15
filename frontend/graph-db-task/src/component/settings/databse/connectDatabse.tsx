import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function ConnectDatabse() {
  const database = ["Blazergraph", ""];
  const [selectedValue, setSelectedValue] = useState(database[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [folderPath, setFolderPath] = useState("");
  // const [minMemoryUsage, setMinMemoryUsage] = useState("");
  // const [maxMemoryUsage, setMaxMemoryUsage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setIsOpen(false);
  };

  const handleFolderSelection = () => {
    // Simulate folder selection dialog
    const selectedFolder = "C:/Program Files/BlazerDb"; // Replace with actual folder selection logic
    setFolderPath(selectedFolder);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      selectedValue,
      folderPath,
      // minMemoryUsage,
      // maxMemoryUsage,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-[mulish] font-[700] text-[20px] mt-2 mb-4">
        Create a new Database
      </h1>
      <p className="text-slate-500">
        새로운 데이터베이스를 생성하기 위해 데이터베이스의 유형을 선택하고, 설치
        경로와 Port를 입력해주세요. 추가적으로 최소/최대 메모리 사용량을
        입력하면, 이에 맞게 데이터베이스가 실행됩니다.
      </p>

      <h2 className="text-xl font-bold mt-4">Required</h2>

      <form onSubmit={handleSubmit}>
        <div className="mt-4 relative flex space-x-5  items-center">
          <label
            htmlFor="databaseType"
            className="block font-[Mulish] text-[16px] leading-[24px] font-[500] "
          >
            Database Type
          </label>
          <div className="flex items-center space-x-4 relative">
            <select
              id="databaseType"
              value={""}
              onChange={handleChange}
              className={`p-2 border border-gray-300 rounded w-full  transition-transform duration-75 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              {database.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`absolute left-28  flex  cursor-pointer transition-transform `}
          >
            {!isOpen ? (
              <div className="flex items-center space-x-2">
                <span className="text-slate-800">{database}</span>
                <IoChevronDown size={14} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-3 mt-4">
          <label
            htmlFor="installationPath"
            className="block font-[Mulish] w-1/3 text-[16px] leading-[24px] font-[500] "
          >
            IP Address
          </label>
          <button
            type="button"
            onClick={handleFolderSelection}
            className="ml-2 bg-[#007EFF]  w-[250px] font-[Mulish] leading-6 font-[600]  text-[16px] text-white px-5 py-3 rounded-[8px] hover:bg-blue-600"
          >
            Choose Folder
          </button>
          <div className="flex items-center w-full">
            <input
              id="installationPath"
              placeholder="/home/ubuntu/data/address/"
              type="text"
              value={folderPath}
              readOnly
              className=" font-[Mulish] text-[16px] leading-[24px] font-[500] py-3 px-7 border focus:outline-none border-slate-700  rounded-lg w-4/5"
            />
          </div>
        </div>
        <div className="w-[80%] flex items-center space-x-1 mt-4">
          <label
            htmlFor="installationPath"
            className=" block font-[Mulish] w-1/4 text-[16px] leading-[24px] font-[500] "
          >
            Port
          </label>

          <div className="flex items-center ">
            <input
              id="installationPath"
              placeholder="999"
              type="number"
              value={folderPath}
              readOnly
              className="py-3 px-7 border items-start focus:outline-none focus-within:inset-0 border-slate-700  rounded-lg w-2/3"
            />
          </div>
        </div>

        <div className="mt-10 w-full flex items-center">
          <button
            type="submit"
            className="mt-6 bg-[#007EFF] text-white p-3 rounded-md mx-auto w-[246px] hover:bg-blue-600"
          >
            Connect Database
          </button>
        </div>
      </form>
    </div>
  );
}
