import { createContext } from "react";

export interface AppContextType {
  startTimeMs: number;
}

const AppContext = createContext({} as AppContextType);
export default AppContext;
