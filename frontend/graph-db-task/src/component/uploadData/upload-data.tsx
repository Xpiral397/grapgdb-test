import { useState } from "react";

const FileRow = ({ fileName, graphOptions, size }: any) => {
  const [selectedGraph, setSelectedGraph] = useState(graphOptions[0]);

  const handleGraphChange = (event: any) => {
    setSelectedGraph(event.target.value);
  };

  return (
    <div className="bg-white flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4 sm:space-x-28 mx-4 sm:mx-12 w-full sm:w-auto">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className="text-sm sm:text-lg truncate">{fileName}</span>
      </div>
      <div className="mx-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-20 w-full sm:w-auto justify-between sm:justify-end sm:ml-auto">
        <select
          value={selectedGraph}
          onChange={handleGraphChange}
          className="py-1 px-2   rounded text-[13px] w-full sm:w-auto"
        >
          {graphOptions.map((option: any, index: any) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="text-[13px] sm:ml-10">{size}</span>
        <div className="flex space-x-4 sm:space-x-10">
          <button className=" text-white py-1 px-3 rounded flex items-center text-[13px]">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 1.36004e-06 15 1.36004e-06C23.2843 1.36004e-06 30 6.71573 30 15Z"
                fill="#007EFF"
              />
              <path
                d="M18.5 11.5L11.5 18.5"
                stroke="#737B7D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.5 11.5L18.5 18.5"
                stroke="#737B7D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="text-red-500 flex items-center justify-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.1" cx="15" cy="15" r="15" fill="#007EFF" />
              <g clip-path="url(#clip0_1_955)">
                <path
                  d="M20.3619 17.0158L20.3108 19.3486C20.3041 19.658 20.1747 19.9519 19.9512 20.1659C19.7276 20.3799 19.4283 20.4962 19.1189 20.4895L10.9542 20.3109C10.6449 20.3041 10.3509 20.1747 10.1369 19.9512C9.92298 19.7277 9.80658 19.4283 9.81335 19.119L9.86438 16.7862"
                  stroke="#737B7D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.1184 12.8824L15.2662 9.90266L12.2864 12.7548"
                  stroke="#737B7D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.2662 9.90265L15.1131 16.901"
                  stroke="#737B7D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_955">
                  <rect
                    width="14"
                    height="14"
                    fill="white"
                    transform="translate(8.30615 8) rotate(1.25319)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function UploadData() {
  const [files] = useState([
    {
      fileName: "example-file1.txt",
      graphOptions: ["Graph1", "Graph2", "Graph3"],
      size: "15MB",
    },
    {
      fileName: "example-file2.txt",
      graphOptions: ["Graph1", "Graph2"],
      size: "10MB",
    },
    {
      fileName: "example-file3.txt",
      graphOptions: ["Graph1", "Graph3"],
      size: "20MB",
    },
  ]);

  return (
    <div className="p-4 sm:p-12 max-w-full overflow-x-auto">
      <div className="mt-10">
        <div className="w-full sm:w-[350px] border border-slate-100 rounded-md bg-white shadow-md">
          <div className="flex items-center p-6">
            <svg
              width="42"
              height="52"
              viewBox="0 0 42 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4"
            >
              <path
                d="M23.5 1H6C4.67392 1 3.40215 1.52678 2.46447 2.46447C1.52678 3.40215 1 4.67392 1 6V46C1 47.3261 1.52678 48.5979 2.46447 49.5355C3.40215 50.4732 4.67392 51 6 51H36C37.3261 51 38.5979 50.4732 39.5355 49.5355C40.4732 48.5979 41 47.3261 41 46V18.5L23.5 1Z"
                stroke="#25282B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.5 1V46"
                stroke="#25282B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="flex flex-col justify-between">
              <h1 className="text-[#25282B] font-[Mulish] font-bold text-lg mb-2">
                File Upload
              </h1>
              <span className="text-sm text-gray-600">
                rdf/xml, ttl, ntriples, json-ld의 파일 형식을 지원하고, 여러
                파일의 선택이 가능합니다.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 space-y-4">
        <div className="w-full flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center space-x-4 sm:space-x-28">
            <button className="relative px-4 py-2 bg-[#007EFF] rounded-lg shadow-lg text-white text-sm font-semibold">
              Import
            </button>
            <span className="text-[13px]">File</span>
          </div>
          <div className="flex items-center space-x-8 sm:space-x-14 mx-10 font-[mulish] text-[#737B7D] leading-7">
            <span className="text-[13px]">Named Graph ID</span>
            <span className="text-[13px]">Size</span>
            <span className="text-[13px]">Delete</span>
            <span className="text-[13px]">Import</span>
          </div>
        </div>

        <div className="space-y-4">
          {files.map((file, index) => (
            <FileRow
              key={index}
              fileName={file.fileName}
              graphOptions={file.graphOptions}
              size={file.size}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
