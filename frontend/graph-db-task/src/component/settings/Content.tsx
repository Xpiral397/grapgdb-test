// import { useState } from "react";
// import { IoAddCircleOutline } from "react-icons/io5";

// // Correct spelling of RepositoryList
// export const RepositoryList = ({ link }: { link: string }) => {
//   function extractNameBeforeNamespace(url: string) {
//     try {
//       const { pathname } = new URL(url);
//       const segments = pathname.split("/");
//       const index = segments.indexOf("namespace");

//       return segments.length > index + 1 ? segments[index + 1] : "";
//     } catch (error) {
//       console.error("Invalid URL:", error);
//       return "";
//     }
//   }
// //
//   return (
//     <ul className="w-full flex justify-between py-3 px-4 rounded border-[#E9EFF4] border bg-[#ffff]">
//       <li className="w-1/3">{extractNameBeforeNamespace(link)}</li>
//       <li className="w-3/5">{link}</li>
//       <ul className="flex justify-between w-1/6 px-10">
//         {[
//           "&times;",
//           <svg
//             width="14"
//             height="14"
//             viewBox="0 0 14 14"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M11.6668 3.5L5.25016 9.91667L2.3335 7"
//               stroke="#737B7D"
//               strokeWidth="3"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>,
//           <svg
//             width="14"
//             height="14"
//             viewBox="0 0 14 14"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M11.6668 3.5L5.25016 9.91667L2.3335 7"
//               stroke="#737B7D"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>,
//         ].map((icon, idx) => (
//           <li key={idx} className="relative">
//             <span className="absolute flex items-center w-5 h-5 text-center text-gray-500 rounded-full cursor-pointer close bg-green-50 top-2 right-2">
//               <span className="mx-[3.3px] mb-[5px]">
//                 {idx == 0 ? (
//                   <>&times;</>
//                 ) : (
//                   <span className="mx-[3.3px] mb-[5px]">
//                     {idx !== 0 && icon}{" "}
//                   </span>
//                 )}
//               </span>
//             </span>
//           </li>
//         ))}
//       </ul>
//     </ul>
//   );
// };

// export function Content() {
//   // Simulated data fetched from the backend
//   const [data] = useState({
//     basicInfo: {
//       dataType: "Blazegraph",
//       ipAddress: "localhost",
//       port: "9999",
//       repositories: 1,
//     },
//     additionalInfo: {
//       data: [
//         {
//           queryStartCount: 1000,
//           queryErrorCount: 0,
//           queryDoneCount: 1008,
//           queryPerSecond: 1.0016972,
//           deadlineQueueSize: 0,
//         },
//         {
//           operatorTasksPerQuery: 1008,
//           operatorStartCount: 5344655,
//           operatorHaltCount: 5344655,
//           operatorActiveCount: 0,
//         },
//       ],
//     },
//     repositories: [
//       {
//         url: "http://localhost:9999/blazegraph/namespace/kb/sparql",
//       },
//       {
//         url: "http://localhost:9999/blazegraph/namespace/kb/sparql",
//       },
//       // Add more repositories here if needed
//     ],
//   });

//   return (
//     <div>
//       <div className="flex space-x-10 md:space-x-20 md:p-7 lg:p-12 w-full bg-white rounded-md border-[#E9EFF4] border-[1px]">
//         {/* Basic Information */}
//         <div className="w-full max-w-md mb-4">
//           <h3 className="mb-2 font-bold">Basic Information</h3>
//           <div className="flex flex-col w-full gap-4">
//             {Object.entries(data.basicInfo).map(([key, value]) => (
//               <div key={key} className="flex justify-between">
//                 <span className="font-[600] font-[Mulish]">
//                   {formatKey(
//                     key
//                       .replace("dataType", "Database Type")
//                       .replace("ipAddress", "IP Address")
//                   )}
//                   :
//                 </span>
//                 <span className="text-[#52575C] w-[30%] text-left font-[400] ">
//                   {value}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Additional Information */}
//         <div className="w-full mb-4">
//           <h3 className="mb-2 font-bold">Additional Information</h3>
//           <div className="flex items-start w-full space-x-10">
//             {data.additionalInfo.data.map((info, index) => (
//               <div key={index} className="flex flex-col w-full gap-2 gap-x-5">
//                 {Object.entries(info).map(([key, value]) => (
//                   <div key={key} className="flex justify-between w-full">
//                     <span className="font-[Mulish] font-[600]">
//                       {formatKey(key, false)}
//                     </span>
//                     <span className="text-[#52575C] w-[40%] text-left font-[400] ">
//                       {value}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center mt-10 mb-10 space-x-3 text-xl font-semibold font-Montserrat leading-7-24/3">
//         <p>Repository</p>
//         <IoAddCircleOutline
//           className="text-gray-500 cursor-pointer"
//           size={24}
//         />
//       </div>
//       <div className="space-y-5">
//         {data.repositories.map((repo, index) => (
//           <RepositoryList key={index} link={repo.url} />
//         ))}
//       </div>
//     </div>
//   );
// }

// // Helper function to format keys
function formatKey(key: any, space: boolean = true) {
  // Capitalize the first letter and replace camelCase with spaces
  return key
    .replace(/([a-z])([A-Z])/g, (space && "$1 $2") || "$1$2")
    .replace(/^./, (str: string) => str.toUpperCase());
}
// Content.tsx
import { useEffect } from "react";
// import { IoAddCircleOutline } from "react-icons/io5";
import { useAppContext } from "../../context/appContext";
import { IoAddCircleOutline } from "react-icons/io5";

export const RepositoryList = ({ link }: { link: string }) => {
  function extractNameBeforeNamespace(url: string) {
    try {
      const { pathname } = new URL(url);
      const segments = pathname.split("/");
      const index = segments.indexOf("namespace");

      return segments.length > index + 1 ? segments[index + 1] : "";
    } catch (error) {
      console.error("Invalid URL:", error);
      return "";
    }
  }

  return (
    <ul className="w-full flex justify-between py-3 px-4 rounded border-[#E9EFF4] border bg-[#ffff]">
      <li className="w-1/3">{extractNameBeforeNamespace(link)}</li>
      <li className="w-3/5">{link}</li>
      <ul className="flex justify-between w-1/6 px-10">
        {[
          "&times;",
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6668 3.5L5.25016 9.91667L2.3335 7"
              stroke="#737B7D"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>,
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6668 3.5L5.25016 9.91667L2.3335 7"
              stroke="#737B7D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>,
        ].map((icon, idx) => (
          <li key={idx} className="relative">
            <span className="absolute flex items-center w-5 h-5 text-center text-gray-500 rounded-full cursor-pointer close bg-green-50 top-2 right-2">
              <span className="mx-[3.3px] mb-[5px]">
                {idx === 0 ? (
                  <>&times;</>
                ) : (
                  <span className="mx-[3.3px] mb-[5px]">
                    {idx !== 0 && icon}{" "}
                  </span>
                )}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </ul>
  );
};

export const Content = ({ onNext }: any) => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      // Simulate API call
      const fetchedData = {
        basicInfo: {
          dataType: "Blazegraph",
          ipAddress: "localhost",
          port: "9999",
          repositories: 1,
        },
        additionalInfo: {
          data: [
            {
              queryStartCount: 1000,
              queryErrorCount: 0,
              queryDoneCount: 1008,
              queryPerSecond: 1.0016972,
              deadlineQueueSize: 0,
            },
            {
              operatorTasksPerQuery: 1008,
              operatorStartCount: 5344655,
              operatorHaltCount: 5344655,
              operatorActiveCount: 0,
            },
          ],
        },
        repositories: [
          {
            url: "http://localhost:9999/blazegraph/namespace/kb/sparql",
          },
          {
            url: "http://localhost:9999/blazegraph/namespace/kb/sparql",
          },
        ],
      };

      // Dispatch actions to update context state
      dispatch({ type: "SET_REPOSITORIES", payload: fetchedData.repositories });
      dispatch({ type: "SET_BASIC_INFO", payload: fetchedData.basicInfo });
      dispatch({
        type: "SET_ADDITIONAL_INFO",
        payload: fetchedData.additionalInfo as any,
      });
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <div className="flex space-x-10 md:space-x-20 md:p-7 lg:p-12 w-full bg-white rounded-md border-[#E9EFF4] border-[1px]">
        {/* Basic Information */}
        <div className="w-full max-w-md mb-4">
          <h3 className="mb-2 font-bold">Basic Information</h3>
          <div className="flex flex-col w-full gap-4">
            {Object.entries(state.basicInfo).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="font-[600] font-[Mulish]">
                  {formatKey(
                    key
                      .replace("dataType", "Database Type")
                      .replace("ipAddress", "IP Address")
                  )}
                  :
                </span>
                <span className="text-[#52575C] w-[30%] text-left font-[400] ">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="w-full mb-4">
          <h3 className="mb-2 font-bold">Additional Information</h3>
          <div className="flex items-start w-full space-x-10">
            {state.additionalInfo.data.map((info: any, index: any) => (
              <div key={index} className="flex flex-col w-full gap-2 gap-x-5">
                {Object.entries(info).map(([key, value]: any) => (
                  <div key={key} className="flex justify-between w-full">
                    <span className="font-[Mulish] font-[600]">
                      {formatKey(key, false)}
                    </span>
                    <span className="text-[#52575C] w-[40%] text-left font-[400]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center mt-10 mb-10 space-x-3 text-xl font-semibold font-Montserrat leading-7-24/3">
        <p>Repository</p>
        <IoAddCircleOutline
          onClick={() => {
            onNext();
          }}
          className="text-gray-500 cursor-pointer"
          size={24}
        />
      </div>
      <div className="space-y-5">
        {state.repositories.map((repo: any, index: any) => (
          <RepositoryList key={index} link={repo.url} />
        ))}
      </div>
    </div>
  );
};
