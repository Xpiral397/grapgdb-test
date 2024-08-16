import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function CreateDatabase({ onNext }: { onNext: () => void }) {
  const database = ["Blazergraph", "MySQL", "PostgreSQL"]; // Example databases
  const [selectedValue, setSelectedValue] = useState(database[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [folderPath, setFolderPath] = useState("");
  const [port, setPort] = useState("");
  const [minMemoryUsage, setMinMemoryUsage] = useState("");
  const [maxMemoryUsage, setMaxMemoryUsage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setIsOpen(false);
  };

  const handleFolderSelection = () => {
    const selectedFolder = "C:/Program Files/BlazerDb";
    setFolderPath(selectedFolder);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      selectedValue,
      folderPath,
      port,
      minMemoryUsage,
      maxMemoryUsage,
    });
  };

  return (
    <div className="container p-2 mx-auto">
      <h1 className="text-[#25282B] font-[Mulish] font-[700] text-[16px] mt-2 mb-4">
        Create a new Database
      </h1>
      <p className="mb-6 text-slate-500">
        새로운 데이터베이스를 생성하기 위해 데이터베이스의 유형을 선택하고, 설치
        경로와 Port를 입력해주세요. 추가적으로 최소/최대 메모리 사용량을
        입력하면, 이에 맞게 데이터베이스가 실행됩니다.
      </p>

      <form onSubmit={handleSubmit} className="mt-6">
        <h2 className="text-[16px]  font-[Mulish] text-[#25282B] font-bold mt-1">
          Required
        </h2>
        <div className="relative flex items-center mt-2 space-x-5">
          <label
            htmlFor="databaseType"
            className="block text-[#25282B] font-[Mulish] text-[16px] leading-[24px] font-[500]"
          >
            Database Type
          </label>
          <div className="relative flex items-center space-x-4">
            <select
              id="databaseType"
              value={selectedValue}
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
            className={`absolute left-28 flex cursor-pointer transition-transform`}
          >
            {!isOpen ? (
              <div className="flex items-center space-x-2">
                <span className="text-slate-800">{selectedValue}</span>
                <IoChevronDown size={14} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="flex items-center mt-4 space-x-3">
          <label
            htmlFor="installationPath"
            className="block text-[#25282B] font-[Mulish] w-1/3 text-[16px] leading-[24px] font-[500]"
          >
            Installation Path
          </label>
          <button
            type="button"
            onClick={handleFolderSelection}
            className="ml-2 relative bg-[#007EFF] shadow-md shadow-blue-300 w-[250px]  font-[Mulish] font-[500] leading-6  text-[16px] text-[#FFFFFF] px-5 py-3 rounded-[8px] hover:bg-blue-600"
          >
            <div className="absolute ">
              <input type="file" className="opacity-0 w-[250px]" />
            </div>{" "}
            Choose folder
          </button>
          <div className="flex items-center w-full">
            <input
              id="installationPath"
              placeholder="/home/ubuntu/data/address/"
              type="text"
              value={folderPath}
              readOnly
              className="text-[#25282B] font-[Mulish] text-[16px] leading-[24px] font-[500] py-3 px-7 border focus:outline-none border-slate-700 rounded-lg w-4/5"
            />
          </div>
        </div>

        <div className="w-[80%] flex items-center space-x-1 mt-4">
          <label
            htmlFor="port"
            className="block text-[#25282B] font-[Mulish] w-1/4 text-[16px] leading-[24px] font-[500]"
          >
            Port
          </label>
          <div className="flex items-center">
            <input
              id="port"
              placeholder="9999"
              type="tell"
              value={port}
              onChange={(e) => setPort(e.target.value)}
              className="w-2/3 py-3 border rounded-lg px-7 focus:outline-none border-slate-700"
            />
          </div>
        </div>

        <label className="block  font-[Mulish] w-1/4 text-[#25282B] text-[16px] leading-[24px] mt-4 font-[700]">
          Optional
        </label>
        <div className="w-[80%] flex items-center space-x-1 mt-2">
          <label
            htmlFor="minMemoryUsage"
            className="block text-[#25282B] font-[Mulish] w-3/4 text-[16px] leading-[24px] font-[500]"
          >
            Minimum Memory Usage (MB)
          </label>
          <div className="flex items-center">
            <input
              id="minMemoryUsage"
              placeholder="512"
              type="tell"
              value={minMemoryUsage}
              onChange={(e) => setMinMemoryUsage(e.target.value)}
              className="w-2/3 py-3 border rounded-lg px-7 focus:outline-none border-slate-700"
            />
          </div>
        </div>

        <div className="w-[80%] flex items-center space-x-1 mt-4">
          <label
            htmlFor="maxMemoryUsage"
            className="block text-[#25282B] font-[Mulish] w-3/4 text-[16px] leading-[24px] font-[500]"
          >
            Maximum Memory Usage (MB)
          </label>
          <div className="flex items-center">
            <input
              id="maxMemoryUsage"
              placeholder="2048"
              type="tell"
              value={maxMemoryUsage}
              onChange={(e) => setMaxMemoryUsage(e.target.value)}
              className="w-2/3 py-3 border rounded-lg px-7 focus:outline-none border-slate-700"
            />
          </div>
        </div>

        <div className="flex items-center w-full mt-10">
          <button
            type="submit"
            onClick={() => onNext()}
            className="mt-6 bg-[#007EFF] text-white p-3 rounded-md mx-auto w-[246px] hover:bg-blue-600"
          >
            Create Database
          </button>
        </div>
      </form>
    </div>
  );
}
