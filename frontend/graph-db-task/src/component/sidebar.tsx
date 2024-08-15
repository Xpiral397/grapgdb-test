import React from "react";
import logoIcon from "../assets/component/logo.svg";
import settingIcon from "../assets/component/setting.svg";
import downloadIcon from "../assets/component/download.svg";
import namespaceIcon from "../assets/component/namespace.svg";
import shareIcon from "../assets/component/share.svg";
import volumeIcon from "../assets/component/volume.svg";
import stacksIcon from "../assets/component/stacks.svg";
import bulbIcon from "../assets/component/bulb.svg";
import { Link, useLocation } from "react-router-dom";
import { useTab } from "../context/localContext";

const Sidebar: React.FC = () => {
  const { setCurrentTab } = useTab();
  const location = useLocation();

  const menuItems = [
    { name: "설정", path: "/settings", icon: settingIcon },
    { name: "Namespace", path: "/namespace", icon: namespaceIcon },
    { name: "데이터 업로드", path: "/data-upload", icon: downloadIcon },

    { name: "SPARQL", path: "/sparql", icon: bulbIcon },
    { name: "통계", path: "/statistics", icon: volumeIcon },
    { name: "그래프 탐색", path: "/graph-explore", icon: shareIcon },
    { name: "Stack", path: "/stack", icon: stacksIcon },
  ];

  return (
    <div className="w-64 text-sm h-screen bg-[#363740] text-slate-400 flex flex-col">
      <div className="p-10 text-sm font-semibold border-b border-gray-700 flex items-center">
        <img src={logoIcon} alt="Logo" className="z-20 mx-2 h-6" />
      </div>
      <ul className="  px-2 space-y-3 w-[250px] transition-transform duration-700">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center  h-[56px] space-x-10 rounded  ${
              location.pathname === item.path
                ? "z-10 border border-l-[#DDE2FF] border-l-4 border-gray-700 bg-[#4d505e] w-full p-5 text-[#93C5FD] "
                : "hover:bg-gray-700 text-[#A4A6B3]   ml-4"
            }`}
            onClick={() => setCurrentTab(item.name)}
          >
            <img src={item.icon} alt={item.name} className="ml-5 h-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </ul>
      <div className="p-4 border-t border-gray-700">
        <span>한국어</span>
      </div>
    </div>
  );
};

export default Sidebar;
