import { useEffect, useState } from "react";
import "./App.css";
import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";
import { StreamLanguage } from "@codemirror/language";
import Statement from "./components/Statment/Statement";
import Timer from "./components/Timer.tsx/Timer";

function App() {
  const [code, setCode] = useState<string>("");
  const [startTimeMs, setStartTimeMs] = useState(Date.now());

  function onCodeChange(newCode: string, viewUpdate: ViewUpdate) {
    setCode(newCode);
  }

  useEffect(() => {
    setStartTimeMs(Date.now());
  }, []);

  return (
    <div className="app">
      <div className="scrollable" id="buttons-scrollable">
        <div className="extra-row">
          <button className="btn btn-warning normal-btn">Medium</button>
          <button className="btn btn-primary normal-btn">Hints</button>
          <button className="btn btn-danger normal-btn">Give up</button>
          <button className="btn btn-secondary normal-btn">Solutions</button>
          <button className="btn btn-primary normal-btn">Description</button>
          <Timer startTimeMs={startTimeMs} allowedTimeMs={5000} />
        </div>
      </div>

      <Statement
        statement={{
          blocks: [
            {
              text: "This is the first block",
              imgUri: "",
            },
            {
              text: "This it the 2nd block",
              imgUri: "matrix.jpg",
            },
          ],
        }}
        inputStatement={["The file will have 3 numbers on each line"]}
        outputStatement={["The file will have 3 numbers on each line"]}
        constraintsStatement={["n > 100"]}
      />

      <div className="code-section">
        <div className="cool-code-editor">
          <CodeMirror
            value={code}
            height="100%"
            theme="dark"
            lang={"cpp"}
            width="100%"
            editable={true}
            onChange={onCodeChange}
          ></CodeMirror>
        </div>

        <div className="end-buttons">
          <button className="btn btn-success normal-btn">Submit</button>
          <button className="btn btn-success normal-btn">Run</button>
        </div>
      </div>
    </div>
  );
}

export default App;
