import React, { useContext, useState } from "react";
import "./Problem.css";
import { cpp } from "@codemirror/lang-cpp";
import { lineNumbers } from "@uiw/react-codemirror";
import Statement from "../Statment/Statement";
import Timer from "../Timer.tsx/Timer";
import AppContext from "../../contexts/app-context";
import CodeMirror from "@uiw/react-codemirror";

enum ProblemState {
  DESCRIPTION,
  SUBMISSIONS,
  HINTS,
}

const Problem = () => {
  const [code, setCode] = useState<string>("");
  const { startTimeMs } = useContext(AppContext);

  function onCodeChange(newCode: string) {
    setCode(newCode);
  }
  return (
    <div className="problem">
      <div className="scrollable" id="buttons-scrollable">
        <div className="extra-row">
          <button className="btn btn-primary normal-btn">Hints</button>
          <button className="btn btn-danger normal-btn">Give up</button>
          <button className="btn btn-secondary normal-btn">Submissions</button>
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
            extensions={[cpp(), lineNumbers()]}
          ></CodeMirror>
        </div>

        <div className="end-buttons">
          <button className="btn btn-success normal-btn">Submit</button>
          <button className="btn btn-success normal-btn">Run</button>
        </div>
      </div>
    </div>
  );
};

export default Problem;
