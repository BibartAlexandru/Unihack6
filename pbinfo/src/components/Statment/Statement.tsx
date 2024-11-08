import React from "react";
import "./Statement.css";
import IStatement from "../../interfaces/statement";

interface Props {
  statement: IStatement;
  inputStatement: string[];
  outputStatement: string[];
  constraintsStatement: string[];
}

const Statement = ({
  statement,
  inputStatement,
  outputStatement,
  constraintsStatement,
}: Props) => {
  return (
    <div className="statement">
      <div className="input-block">
        <h4>Description</h4>
        {statement.blocks.map((block, index) => (
          <div key={`statement${index}`} className="text-block">
            <h5>{block.text}</h5>
            {block.imgUri.length !== 0 && (
              <img src={block.imgUri} alt="statement image" />
            )}
          </div>
        ))}
      </div>
      <div className="inputs-block">
        <h4>Inputs</h4>
        {inputStatement.map((inputS, index) => (
          <h5 className="text-statement" key={`inpS${index}`}>
            {inputS}
          </h5>
        ))}
      </div>
      <div className="inputs-block">
        <h4>Outputs</h4>
        {outputStatement.map((outputS, index) => (
          <h5 className="text-statement" key={`outS${index}`}>
            {outputS}
          </h5>
        ))}
      </div>
      <div className="inputs-block">
        <h4>Constraints</h4>
        {constraintsStatement.map((constrS, index) => (
          <h5 className="text-statement" key={`outS${index}`}>
            {constrS}
          </h5>
        ))}
      </div>
    </div>
  );
};

export default Statement;
