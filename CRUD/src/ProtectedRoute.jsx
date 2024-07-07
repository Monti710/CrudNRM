import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import './css/LoadingAnimation.css';

const LoadingAnimation = () => {
    return (
        <div className="loading-container">
            <div className="loading-text">Loading</div>
            <div className="dots-container">
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
            </div>
        </div>
    );
};

const ProtectedRoute = () => {
    const { isAuthenticated, checkToken, logout } = useAuth();
    const navigate = useNavigate();
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!checkToken() && isAuthenticated) {
            logout();
            navigate('/login');
        }
    }, [checkToken, isAuthenticated, logout, navigate]);

    if (showLoading) {
        return <LoadingAnimation />;
    }

    if (!isAuthenticated || !checkToken()) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;