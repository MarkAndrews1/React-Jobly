import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navigation.css"

function Navigation({logout}){
    const { currentUser } = useContext(UserContext);
    function loggedInNav(){
        return(
            <ul>
                <li>
                    <NavLink to="/companies">
                        Companies
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/jobs">
                        Jobs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li>
                <Link className="nav-link" to="/" onClick={logout}>
                    Log out 
                </Link>
                </li>
            </ul>
        )
    }

    function loggedOutNav(){
        return(
            <ul>
            <li>
                <NavLink to="/login">
                    Log In
                </NavLink>
            </li>
            <li>
                <NavLink to="/signup">
                    Sign up
                </NavLink>
            </li>
        </ul>
        )
    }

    return (
        <nav className="Navigation-navbar">
        <Link className="navbar-brand" to="/">
          Jobly
        </Link>
        {currentUser ? loggedInNav() : loggedOutNav()}
      </nav>
    )
}

export default Navigation