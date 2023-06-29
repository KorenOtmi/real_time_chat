import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("userToken");

        if (!token) {
            navigate("/");
        }
    }, [navigate]);

    return <>{children}</>;
};

export default ProtectedRoutes;