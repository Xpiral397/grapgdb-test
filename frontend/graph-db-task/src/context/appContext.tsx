import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types for state
interface BasicInfo {
  dataType: string;
  ipAddress: string;
  port: string;
  repositories: number;
}

interface AdditionalInfo {
  data: Array<{
    queryStartCount?: number;
    queryErrorCount?: number;
    queryDoneCount?: number;
    queryPerSecond?: number;
    deadlineQueueSize?: number;
    operatorTasksPerQuery?: number;
    operatorStartCount?: number;
    operatorHaltCount?: number;
    operatorActiveCount?: number;
  }>;
}

interface AppState {
  basicInfo: BasicInfo;
  additionalInfo: AdditionalInfo;
  repositories: Array<{ url: string }>;
}

interface AppContextProps {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}

// Create context
const AppContext = createContext<AppContextProps | undefined>(undefined);

// Create provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<AppState>({
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
      { url: "http://localhost:9999/blazegraph/namespace/kb/sparql" },
      { url: "http://localhost:9999/blazegraph/namespace/kb/sparql" },
    ],
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
