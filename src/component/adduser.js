import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export function Add() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/users", userData)
            .then(() => navigate("/"))
            .catch((error) => {
                console.error("error adding user:", error);
            });
    };

    return (
        <div className="w-screen h-full flex flex-col justify-center mt-16">
            <h2 className="text-2xl font-bold">ADD User</h2>
            <form className="m-10" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input className="shadow-lg bg-gray-50 border-solid divide-x-2 border-gray-400" type="text" name="name" value={userData.name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input className="shadow-lg bg-gray-50 border-solid divide-x-2 border-gray-400" type="text" name="email" value={userData.email} onChange={handleChange} />
                </label>
                <label>
                    Phone:
                    <input className="shadow-lg bg-gray-50 border-solid divide-x-2 border-gray-400" type="text" name="phone" value={userData.phone} onChange={handleChange} />
                </label>
                <button className='bg-red-600 text-white px-6 py-2 rounded-lg' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
