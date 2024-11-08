import React, { useContext, useState } from "react";
import "./ProblemHints.css";
import { IHint } from "../../interfaces/hint";
import AppContext from "../../contexts/app-context";
import ProblemContext, {
  ProblemContextType,
} from "../../contexts/problem-context";

const ProblemHints = () => {
  const { hints, setHints } = useContext(ProblemContext) as ProblemContextType;
  const [hintsDocked, setHintsDocked] = useState<boolean[]>(
    new Array(hints.length).fill(true)
  );
  const { setScore, score } = useContext(AppContext);
  return (
    <div className="problem-hints">
      {hints.map((hint, index) => (
        <div
          className={hintsDocked[index] ? "hint-docked" : "hint-undocked"}
          onClick={() => {
            const newHintsDocked = [...hintsDocked];
            newHintsDocked[index] = !newHintsDocked[index];

            if (hint.opened === false) {
              setScore(score - hint.pointsPenalization);
              const newHints = [...hints];
              newHints[index].opened = true;
              setHints(newHints);
            }
            setHintsDocked(newHintsDocked);
          }}
          key={`hint${index}`}
        >
          {hintsDocked[index] ? (
            <>
              <img src="search.svg" alt="" className="icon-small" />
              <h5>Unravel</h5>
              {hint.opened === true ? (
                <h5 className="points-subtracted">{`${hint.pointsPenalization} (already opened)`}</h5>
              ) : (
                <h5 className="points">{`${hint.pointsPenalization} (on open)`}</h5>
              )}
            </>
          ) : (
            <>
              <img src="search.svg" alt="" className="icon-small" />
              <pre>{hint.text}</pre>
              <h5 className="points-subtracted">{`${hint.pointsPenalization} (already opened)`}</h5>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProblemHints;
