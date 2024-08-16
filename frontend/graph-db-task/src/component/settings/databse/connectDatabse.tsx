// ConnectDatabase.tsx
import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { useAppContext } from "../../../context/appContext";

export default function ConnectDatabase() {
  const database = ["Blazegraph", ""];
  const [selectedValue, setSelectedValue] = useState(database[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [folderPath, setFolderPath] = useState("");
  const [setFile] = useState<any>(null);
  const { state, setState } = useAppContext(); // Use setState instead of dispatch

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setIsOpen(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    // console.log(selectedFile);
    if (selectedFile) {
      setFile(selectedFile);
      extractLinksFromFile(selectedFile);
    }
  };

  const extractLinksFromFile = async (file: File) => {
    try {
      const fileContent = await file.text();
      const urlRegex = /rdf:resource="(http[s]?:\/\/[^\s"]+)"/g;
      let match;
      const newRepositories: any = [];

      while ((match = urlRegex.exec(fileContent)) !== null) {
        if ((match[1] && match[1].includes("8080")) || match.includes("9990")) {
          newRepositories.push({ url: match[1] });
        }
      }

      setState((prevState) => ({
        ...prevState,
        repositories: [...prevState.repositories, ...newRepositories],
      }));
    } catch (err) {
      console.error("Failed to read the file. Please try again.");
    }
  };

  const handleFolderSelection = () => {
    // Simulate folder selection dialog
    const selectedFolder = "C:/Program Files/BlazeDb";
    setFolderPath(selectedFolder);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      selectedValue,
      folderPath,
      repositories: state.repositories,
    });
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="font-[Mulish] font-[700] text-[20px] mt-2 mb-4">
        Create a new Database
      </h1>
      <p className="text-slate-500">
        새로운 데이터베이스를 생성하기 위해 데이터베이스의 유형을 선택하고, 설치
        경로와 Port를 입력해주세요. 추가적으로 최소/최대 메모리 사용량을
        입력하면, 이에 맞게 데이터베이스가 실행됩니다.
      </p>

      <h2 className="mt-4 text-xl font-bold">Required</h2>

      <form onSubmit={handleSubmit}>
        <div className="relative flex items-center mt-4 space-x-5">
          <label
            htmlFor="databaseType"
            className="block font-[Mulish] text-[16px] leading-[24px] font-[500]"
          >
            Database Type
          </label>
          <div className="relative flex items-center space-x-4">
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

        <div className="flex items-center mt-4 space-x-3">
          <label
            htmlFor="installationPath"
            className="block font-[Mulish] w-1/3 text-[16px] leading-[24px] font-[500]"
          >
            IP Address
          </label>
          <button
            type="button"
            onClick={handleFolderSelection}
            className="ml-2 relative bg-[#007EFF] shadow-md shadow-blue-300 w-[250px] font-[Mulish] font-[500] leading-6 text-[16px] text-[#FFFFFF] px-5 py-3 rounded-[8px] hover:bg-blue-600"
          >
            <div className="absolute">
              <input
                type="file"
                className="opacity-0 w-[250px]"
                onChange={handleFileChange}
                accept=".rdf"
              />
            </div>{" "}
            Choose file
          </button>
          <div className="flex items-center w-full">
            <input
              id="installationPath"
              placeholder="/home/ubuntu/data/address/"
              type="text"
              value={folderPath}
              readOnly
              className="font-[Mulish] text-[16px] leading-[24px] font-[500] py-3 px-7 border focus:outline-none border-slate-700 rounded-lg w-4/5"
            />
          </div>
        </div>
        <div className="w-[80%] flex items-center space-x-1 mt-4">
          <label
            htmlFor="port"
            className="block font-[Mulish] w-1/4 text-[16px] leading-[24px] font-[500]"
          >
            Port
          </label>
          <div className="flex items-center">
            <input
              id="port"
              placeholder="999"
              type="number"
              value={folderPath}
              readOnly
              className="items-start w-2/3 py-3 border rounded-lg px-7 focus:outline-none focus-within:shadow-[0_0_0_2px_rgb(67,56,202)] border-slate-700"
            />
          </div>
        </div>

        <div className="flex flex-col mx-auto w-[50%] mt-10">
          <button
            type="submit"
            className="w-full bg-[#007EFF] text-[#FFFFFF] px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Create Database
          </button>
        </div>
      </form>
    </div>
  );
}
