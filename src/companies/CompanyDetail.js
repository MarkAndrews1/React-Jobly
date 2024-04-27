import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCardList from "../jobs/JobCardList";
import "./CompanyDetail.css";

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompany() {
      try {
        const companyData = await JoblyApi.getCompany(handle);
        setCompany(companyData);
      } catch (error) {
        console.error("Error fetching company:", error);
      }
    }
    getCompany();
  }, [handle]);

  if (!company) return <h3>Loading...</h3>;

  return (
    <div className="CompanyDetail-container">
      <h4 className="CompanyDetail-name">{company.name}</h4>
      <p className="CompanyDetail-description">{company.description}</p>
      <JobCardList companyJobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;