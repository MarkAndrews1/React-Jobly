import React, {useState, useEffect} from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "../search-form/SeachForm";
import JoblyApi from "../api";

function CompanyList(){
    const [companies, setCompanies] = useState(null)

    useEffect(function getCompanies(){
        console.log("skdghfkjahswdbgfjkhaghf")
        search()
    }, [])

    async function search(name){
        let companies = await JoblyApi.getCompanies(name)
        setCompanies(companies)
    }

    if(!companies) return <h3>Loading...</h3>

    return(
        <div>
            <SearchForm searchFor={search}/>
            { companies.length ?
                (
                    <div>
                        {companies.map(c => (
                            <CompanyCard
                                key={c.handle}
                                name={c.name}
                                description={c.description}
                                handle={c.handle}
                            />
                        ))}
                    </div>
                ) : (<p> Sorry, couldn't find that company... </p>)
            }
        </div>
    )

}

export default CompanyList