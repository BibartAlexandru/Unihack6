import { createContext } from "react";

export interface AppContextType {
  startTimeMs: number;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const AppContext = createContext({} as AppContextType);
export default AppContext;
