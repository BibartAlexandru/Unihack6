import { useEffect, useState } from "react";
import "./App.css";
// import { javascript } from "@codemirror/lang-javascript";
import Problem from "./components/Problem/Problem";
import AppContext from "./contexts/app-context";

function App() {
  const [startTimeMs, setStartTimeMs] = useState(Date.now());

  useEffect(() => {
    setStartTimeMs(Date.now());
  }, []);

  return (
    <AppContext.Provider value={{ startTimeMs }}>
      <div className="app">
        <Problem />
      </div>
    </AppContext.Provider>
  );
}

export default App;
