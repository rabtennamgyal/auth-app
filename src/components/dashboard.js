import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";



function Dashboard() {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogOut() {
        setError('');

        try {
            await logout();
            navigate('/login');
        } catch {
            setError('Failed to log out.')
        }
    };

    return (
        <div className="dashboard">
            <div className="dashHeader">
                <div className="dashInfo">
                    <h2>
                        Profile
                    </h2>
        
                    {error && 
                    <h3>
                        {error}
                    </h3>}
        
                    <strong>
                        Email: {currentUser.email}
                    </strong>
                </div>

                <div className="dashBtns">
                    <Link to='update-profile'>
                        <button>
                            Update Profile
                        </button>
                    </Link>
    
                    <button id='logOutBtn' onClick={handleLogOut}>
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;