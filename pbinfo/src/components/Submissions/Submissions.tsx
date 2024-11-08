import React, { useState } from "react";
import "./Submissions.css";
import { ISubmission } from "../../interfaces/submission";

interface Props {
  submissions: ISubmission[];
}

const Submissions = ({ submissions }: Props) => {
  const [selectedRowIndex, setSelectedRowIndex] = useState<null | number>(null);

  return (
    <div className="submissions">
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Status</th>
            <th>Language</th>
            <th>Runtime</th>
            <th>Memory</th>
            <th>Upload Time</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr
              key={`srow${index}`}
              className={selectedRowIndex === index ? "selected-row" : ""}
              onClick={() => {
                setSelectedRowIndex(index);
              }}
            >
              <td className="status">{submission.status}</td>
              <td>{submission.language}</td>
              <td>{submission.runtime}</td>
              <td>{submission.memory}</td>
              <td>{submission.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Submissions;
