import React from "react";
import JobCard from "./JobCard";

function JobCardList({ companyJobs }) {

  return (
      <div className="JobCardList">
        {companyJobs.map(job => (
            <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                salary={job.salary}
                equity={job.equity}
                companyName={job.companyName}
            />
        ))}
      </div>
  );
}

export default JobCardList;
