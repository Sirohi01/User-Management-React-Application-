// src/components/User/EditUser.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from '../Common/Loader';

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const editUserApi = `http://localhost:3000/user/${id}`;
    
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    });

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(editUserApi);
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

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch(editUserApi, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                navigate('/show-user');
            } else {
                throw new Error('Form submission failed!');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='user-form'>
            <div className='heading'>
                {isLoading && <Loader />}
                {error && <p>Error: {error}</p>}
                <p>Edit User Form</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handleInput} />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" name="phone" value={user.phone} onChange={handleInput} />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Update</button>
            </form>
        </div>
    );
};

export default EditUser;
