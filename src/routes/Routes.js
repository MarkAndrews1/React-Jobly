import React from "react";
import { Routes, Route, Navigate  } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import SignupForm from "../auth/SignupForm";
import LogInForm from "../auth/LogInForm";
import ProfileForm from "../profile/ProfileForm";

function JoblyRoutes({signup, login}){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/companies" element={<CompanyList />} />
                <Route path="/companies/:handle" element={<CompanyDetail />} />
                <Route path="/jobs" element={<JobList />} />
                <Route path="/signup" element={<SignupForm signup={signup} />} />
                <Route path="/login" element={<LogInForm login={login} />} />
                <Route path="/profile" element={<ProfileForm />} />
                <Route path="*" element={<Navigate to='/'/>} />
            </Routes>
        </div>
    )
}

export default JoblyRoutes