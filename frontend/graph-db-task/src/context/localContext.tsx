import React, { createContext, useContext, useState } from "react";

// Create the Context
const TabContext = createContext({
  currentTab: "Home",
  setCurrentTab: (tab: string) => {
    // @ts-ignore: 'tab'
    console.log(tab);
  },
});

// Create a Provider component
export const TabProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTab, setCurrentTab] = useState("설정");

  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </TabContext.Provider>
  );
};

// Custom hook to use the TabContext
export const useTab = () => useContext(TabContext);
