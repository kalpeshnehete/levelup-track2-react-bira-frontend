import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation=()=>{
    return(
        <div>
            <NavLink to ="/dashboard">Dashboard</NavLink>
            <NavLink to ="/create">Create</NavLink>
            <NavLink to ="/issues">Issues</NavLink>
        </div>
    );
}

export default Navigation;