import { createContext } from "react";
import { IHint } from "../interfaces/hint";

export interface ProblemContextType {
  hints: IHint[];
  setHints: React.Dispatch<React.SetStateAction<IHint[]>>;
}

const ProblemContext = createContext({} as ProblemContextType);
export default ProblemContext;
