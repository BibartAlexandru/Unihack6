import { useEffect, useState } from "react";
import "./App.css";
// import { javascript } from "@codemirror/lang-javascript";
import Problem from "./components/Problem/Problem";
import AppContext from "./contexts/app-context";
import { IProblemDifficulty } from "./interfaces/problem-difficulty";
import { IHint } from "./interfaces/hint";

function App() {
  const [startTimeMs, setStartTimeMs] = useState(Date.now());
  const [score, setScore] = useState(100);
  const [hints, setHints] = useState<IHint[]>([]);

  useEffect(() => {
    setStartTimeMs(Date.now());
    setHints([
      {
        text: "This is a hint",
        opened: false,
        pointsPenalization: 469,
      } as IHint,
      {
        text: "This is a 2321 hint",
        opened: false,
        pointsPenalization: 2,
      } as IHint,
      {
        text: "This is a hint",
        opened: false,
        pointsPenalization: 469,
      } as IHint,
    ]);
  }, []);

  return (
    <AppContext.Provider value={{ startTimeMs, score, setScore }}>
      <div className="app">
        <h1 className="score">{score}</h1>
        <Problem
          placeholder="int add_nums(int a, int b){
  
}"
          difficulty={IProblemDifficulty.HARD}
          hints={hints}
          setHints={setHints}
        />
      </div>
    </AppContext.Provider>
  );
}

export default App;
