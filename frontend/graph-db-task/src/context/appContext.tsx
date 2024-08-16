// AppContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Define state type
interface State {
  repositories: Array<{ url: string }>;
  basicInfo: {
    dataType: string;
    ipAddress: string;
    port: string;
    repositories: number;
  };
  additionalInfo: {
    data: Array<{
      queryStartCount: number;
      queryErrorCount: number;
      queryDoneCount: number;
      queryPerSecond: number;
      deadlineQueueSize: number;
    }>;
  };
}

// Define action types
type Action =
  | { type: "SET_REPOSITORIES"; payload: Array<{ url: string }> }
  | { type: "SET_BASIC_INFO"; payload: State["basicInfo"] }
  | { type: "SET_ADDITIONAL_INFO"; payload: State["additionalInfo"] };

// Initial state
const initialState: State = {
  repositories: [],
  basicInfo: {
    dataType: "",
    ipAddress: "",
    port: "",
    repositories: 0,
  },
  additionalInfo: {
    data: [],
  },
};

// Reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_REPOSITORIES":
      return { ...state, repositories: action.payload };
    case "SET_BASIC_INFO":
      return { ...state, basicInfo: action.payload };
    case "SET_ADDITIONAL_INFO":
      return { ...state, additionalInfo: action.payload };
    default:
      return state;
  }
};

// Create context
const AppContext = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

// Create provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
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
