import React from "react";
import { Link } from "react-router-dom";

import "./CompanyCard.css";

function CompanyCard({name, description, handle}){
    return(
        <div className="CompanyCard-container">
            <Link className="CompanyCard-card" to={`/companies/${handle}`}>
                <div className="CompanyCard-body">
                    <h4 className="CompanyCard-name">{name}</h4>
                    <p><small>{description}</small></p>
                </div>
            </Link>
        </div>

    )
}

export default CompanyCard