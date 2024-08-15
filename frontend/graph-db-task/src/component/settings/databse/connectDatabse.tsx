import React, { useState } from "react";
import axios from "axios";
import { IoChevronDown } from "react-icons/io5";

export default function ConnectDatabase() {
  const database = ["Blazegraph", ""];
  const [selectedValue, setSelectedValue] = useState(database[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [folderPath, setFolderPath] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [port, setPort] = useState("");
  const [minMemoryUsage, setMinMemoryUsage] = useState("");
  const [maxMemoryUsage, setMaxMemoryUsage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setIsOpen(false);
  };

  const handleFolderSelection = () => {
    // Simulate folder selection dialog
    const selectedFolder = "C:/Program Files/BlazeDb"; // Replace with actual folder selection logic
    setFolderPath(selectedFolder);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare data to send
    const requestData = {
      databaseType: selectedValue,
      installationPath: folderPath,
      ipAddress: ipAddress,
      port: port,
      minMemoryUsage: minMemoryUsage,
      maxMemoryUsage: maxMemoryUsage,
    };

    try {
      // Replace with your API endpoint
      const response = await axios.post("http://localhost:9999/api/database/create", requestData);

      // Handle success
      setSuccess("Database created successfully!");
      setError(null);
      console.log(response.data);
    } catch (err) {
      // Handle error
      setError("Failed to create database. Please try again.");
      setSuccess(null);
      console.error(err);
    }
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
        <div className="mt-4 relative flex space-x-5 items-center">
          <label
            htmlFor="databaseType"
            className="block font-[Mulish] text-[16px] leading-[24px] font-[500]"
          >
            Database Type
          </label>
          <div className="flex items-center space-x-4 relative">
            <select
              id="databaseType"
              value={selectedValue}
              onChange={handleChange}
              className={`p-2 border border-gray-300 rounded w-full transition-transform duration-75 ${
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

        <div className="flex items-center space-x-3 mt-4">
          <label
            htmlFor="ipAddress"
            className="block font-[Mulish] w-1/3 text-[16px] leading-[24px] font-[500]"
          >
            IP Address
          </label>
          <input
            id="ipAddress"
            placeholder="127.0.0.1"
            type="text"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            className="py-3 px-7 border focus:outline-none border-slate-700 rounded-lg w-2/3"
          />
        </div>

        <div className="w-[80%] flex items-center space-x-1 mt-4">
          <label
            htmlFor="port"
            className="block font-[Mulish] w-1/4 text-[16px] leading-[24px] font-[500]"
          >
            Port
          </label>
          <input
            id="port"
            placeholder="9999"
            type="number"
            value={port}
            onChange={(e) => setPort(e.target.value)}
            className="py-3 px-7 border focus:outline-none border-slate-700 rounded-lg w-2/3"
          />
        </div>

        <div className="flex items-center space-x-3 mt-4">
          <label
            htmlFor="folderPath"
            className="block font-[Mulish] w-1/3 text-[16px] leading-[24px] font-[500]"
          >
            Installation Path
          </label>
          <button
            type="button"
            onClick={handleFolderSelection}
            className="ml-2 bg-[#007EFF] w-[250px] font-[Mulish] leading-6 font-[600] text-[16px] text-white px-5 py-3 rounded-[8px] hover:bg-blue-600"
          >
            Choose Folder
          </button>
          <div className="flex items-center w-full">
            <input
              id="folderPath"
              placeholder="/home/ubuntu/data/address/"
              type="text"
              value={folderPath}
              readOnly
              className="font-[Mulish] text-[16px] leading-[24px] font-[500] py-3 px-7 border focus:outline-none border-slate-700 rounded-lg w-4/5"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3 mt-4">
          <label
            htmlFor="minMemoryUsage"
            className="block font-[Mulish] w-1/3 text-[16px] leading-[24px] font-[500]"
          >
            Min Memory Usage
          </label>
          <input
            id="minMemoryUsage"
            placeholder="512"
            type="number"
            value={minMemoryUsage}
            onChange={(e) => setMinMemoryUsage(e.target.value)}
            className="py-3 px-7 border focus:outline-none border-slate-700 rounded-lg w-2/3"
          />
        </div>

        <div className="flex items-center space-x-3 mt-4">
          <label
            htmlFor="maxMemoryUsage"
            className="block font-[Mulish] w-1/3 text-[16px] leading-[24px] font-[500]"
          >
            Max Memory Usage
          </label>
          <input
            id="maxMemoryUsage"
            placeholder="2048"
            type="number"
            value={maxMemoryUsage}
            onChange={(e) => setMaxMemoryUsage(e.target.value)}
            className="py-3 px-7 border focus:outline-none border-slate-700 rounded-lg w-2/3"
          />
        </div>

        <div className="mt-10 w-full flex items-center">
          <button
            type="submit"
            className="mt-6 bg-[#007EFF] text-white p-3 rounded-md mx-auto w-[246px] hover:bg-blue-600"
          >
            Create Database
          </button>
        </div>

        {/* Display success or error messages */}
        {success && <p className="text-green-500 mt-4">{success}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
}
