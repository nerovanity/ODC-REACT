import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

export function Edit() {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
        .then(res => {
            setUser(res.data);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`, user)
            .then(() => {
                console.log("User updated successfully");
                navigate("/");
            })
            .catch((error) => {
                console.error("Error updating user:", error);
            });
    };

    return(
        <div className="w-screen h-full flex flex-col justify-center mt-16">
            <h2 className="text-2xl font-bold">Edit User</h2>
            <form className="m-10" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input className="shadow-lg bg-gray-50 border-solid divide-x-2 border-gray-400" type="text" name="name" value={user.name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input className="shadow-lg bg-gray-50 border-solid divide-x-2 border-gray-400" type="text" name="email" value={user.email} onChange={handleChange} />
                </label>
                <label>
                    Phone:
                    <input className="shadow-lg bg-gray-50 border-solid divide-x-2 border-gray-400" type="text" name="phone" value={user.phone} onChange={handleChange} />
                </label>
                <button className='bg-red-600 text-white px-6 py-2 rounded-lg' onClick={handleSubmit}>Save Changes</button>
            </form>
        </div>
    )
}
