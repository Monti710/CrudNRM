import React, { useState, useEffect } from 'react';
import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import './css/LoadingAnimation.css'; // Asumimos que crearemos este archivo

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
    const { loading, isAuthenticated } = useAuth();
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 3000); // Muestra la animación de carga por 3 segundos

        return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonta
    }, []);

    if (showLoading) {
        return <LoadingAnimation />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
