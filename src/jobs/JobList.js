import React, {useState, useEffect} from "react";
import JobCard from "./JobCard";
import SearchForm from "../search-form/SeachForm";
import JoblyApi from "../api";

function JobList(){
    const [jobs, setJobs] = useState()

    useEffect(function getJobs(){
        search()
    }, [])

    async function search(title){
        let jobs = await JoblyApi.getJobs(title)
        setJobs(jobs)
    }

    if(!jobs) return <h3>Loading...</h3>
    
    return(
        <div>
            <SearchForm searchFor={search} />
            {jobs.length 
                    ? <div>
                        {jobs.map(j => (
                        <JobCard 
                            key={j.id}
                            id={j.id}
                            title={j.title}
                            salary={j.salary}
                            equity={j.equity}
                            companyName={j.companyName}   
                        />
                        ))}
                      </div>
                    : <p> Sorry, couldn't find that job... </p>
            }
        </div>
    )
}

export default JobList