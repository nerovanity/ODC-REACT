import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Users = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(res => {
        setUser(res.data);
      });
  }, [id]);

  return (
    <div className="w-screen h-full flex flex-col justify-center mt-16">
      <h1 className="text-2xl font-bold">User Details</h1>
      {user && (
        <table className='min-w-full text-center'>
          <thead className='border-b bg-gray-800'>
            <tr>
              <th  scope="col" className='text-sm font-meduim text-white px-6 py-4'>Id</th>
              <th  scope="col" className='text-sm font-meduim text-white px-6 py-4'>Name</th>
              <th  scope="col" className='text-sm font-meduim text-white px-6 py-4'>Email</th>
              <th  scope="col" className='text-sm font-meduim text-white px-6 py-4'>Phone</th>
            </tr>
          </thead>
          <tbody className='border-black border-b-2'>
            <tr key={user.id} className='bg-white border-b-2 border-black'>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{user.id}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{user.name}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{user.email}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{user.phone}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

