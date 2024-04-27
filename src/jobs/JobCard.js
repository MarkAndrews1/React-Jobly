import React, { useContext, useState } from "react";
import UserContext from "../auth/UserContext";
import "./JobCard.css"; // Import the CSS file for styling

function JobCard({ id, title, salary, equity, companyName }) {
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState(false);

  React.useEffect(() => {
    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  async function handleApply() {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
  <div className="JobCard-container">
    <div className={`JobCard card ${applied ? "applied" : ""}`}>
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p>{companyName}</p>
        <div className="job-info">
          {salary && <div className="salary">{formatSalary(salary)}</div>}
          {equity !== undefined && <div className="equity">Equity: {equity}</div>}
        </div>
        <button
          className={`apply-btn ${applied ? "applied-btn" : ""}`}
          onClick={handleApply}
          disabled={applied}
        >
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  </div>

  );
}

function formatSalary(salary) {
  return salary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export default JobCard;