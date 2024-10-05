// src/components/User/User.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from '../Common/Loader';

const User = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const userApi = `http://localhost:3000/user/${id}`;
    
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(userApi);
            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }
            const data = await response.json();
            setUser(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!user) {
        return <p>No user found</p>;
    }

    return (
        <div className='user-details'>
            <h2>User Details</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
        </div>
    );
};

export default User;
