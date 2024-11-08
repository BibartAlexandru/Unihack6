import React, { useContext, useEffect, useRef, useState } from "react";
import "./Problem.css";
import { cpp } from "@codemirror/lang-cpp";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { lineNumbers, placeholder } from "@uiw/react-codemirror";
import Statement from "../Statment/Statement";
import Timer from "../Timer.tsx/Timer";
import AppContext from "../../contexts/app-context";
import CodeMirror from "@uiw/react-codemirror";
import { IProblemDifficulty } from "../../interfaces/problem-difficulty";
import ProblemHints from "../ProblemHints/ProblemHints";
import { IHint } from "../../interfaces/hint";
import ProblemContext from "../../contexts/problem-context";
import Submissions from "../Submissions/Submissions";
import { ISubmission } from "../../interfaces/submission";

enum ProblemState {
  DESCRIPTION,
  SUBMISSIONS,
  HINTS,
}

interface Props {
  difficulty: IProblemDifficulty;
  hints: IHint[];
  setHints: React.Dispatch<React.SetStateAction<IHint[]>>;
  placeholder: string;
}

const Problem = ({ difficulty, hints, setHints, placeholder }: Props) => {
  const [code, setCode] = useState<string>("");
  const [state, setState] = useState(ProblemState.DESCRIPTION);
  const { startTimeMs } = useContext(AppContext);
  const codeMirrorRef = useRef(null);

  function onCodeChange(newCode: string) {
    setCode(newCode);
  }

  useEffect(() => {
    setCode(placeholder);
  }, []);

  useEffect(() => {
    console.log(code);
  }, [code]);

  function getSubmissions(): ISubmission[] {
    //TODO GET
    const currentDate = new Date(Date.now());
    return [
      {
        status: "accepted",
        date: `${currentDate.toDateString()} ${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}`,
        language: "C++",
        runtime: 15252,
        memory: 20,
      },
      {
        status: "accepted",
        date: `${currentDate.toDateString()} ${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}`,
        language: "C++",
        runtime: 15252,
        memory: 20,
      },
      {
        status: "accepted",
        date: `${currentDate.toDateString()} ${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}`,
        language: "C++",
        runtime: 15252,
        memory: 20,
      },
    ] as ISubmission[];
  }

  return (
    <ProblemContext.Provider value={{ hints, setHints }}>
      <div className="problem">
        <div className="scrollable" id="buttons-scrollable">
          <div className="extra-row">
            <button
              className="btn btn-primary normal-btn"
              onClick={() => {
                setState(ProblemState.HINTS);
              }}
            >
              Hints
            </button>
            <button className="btn btn-danger normal-btn">Give up</button>
            <button
              className="btn btn-secondary normal-btn"
              onClick={() => {
                setState(ProblemState.SUBMISSIONS);
              }}
            >
              Submissions
            </button>
            <button
              className="btn btn-primary normal-btn"
              onClick={() => {
                setState(ProblemState.DESCRIPTION);
              }}
            >
              Description
            </button>
            <Timer startTimeMs={startTimeMs} allowedTimeMs={5000} />
          </div>
        </div>
        {state === ProblemState.DESCRIPTION && (
          <div className="description-state">
            <Statement
              difficulty={difficulty}
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
                  ref={codeMirrorRef}
                  value={code}
                  height="100%"
                  theme="dark"
                  lang={"cpp"}
                  width="100%"
                  editable={true}
                  onChange={onCodeChange}
                  extensions={[
                    cpp(),
                    lineNumbers(),
                    keymap.of([...defaultKeymap, indentWithTab]),
                  ]}
                ></CodeMirror>
              </div>

              <div className="end-buttons">
                <button className="btn btn-success normal-btn">Submit</button>
                <button className="btn btn-success normal-btn">Run</button>
              </div>
            </div>
          </div>
        )}
        {state === ProblemState.HINTS && <ProblemHints />}
        {state === ProblemState.SUBMISSIONS && (
          <Submissions submissions={getSubmissions()} />
        )}
      </div>
    </ProblemContext.Provider>
  );
};

export default Problem;
