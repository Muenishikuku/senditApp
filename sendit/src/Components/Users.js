import React, { useState, useEffect } from 'react';
import Admin from '../assets/Admin1.jpg';
import Menu from './Menu';

const Users = ({ user, setUser, setLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    setLoading(true);
    // Fetch users
    fetch("https://sendit-backend-lje2.onrender.com/users", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });

    // Fetch parcels
    fetch("https://sendit-backend-lje2.onrender.com/parcels", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        setParcels(data);
      })
      .catch((error) => {
        console.log("Error fetching parcels:", error);
      });
  }, [setLoading]); // Include setLoading in the dependency array

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  };

  const filteredUsers = users.filter((user) => {
    const username = user.username.toLowerCase();
    return username.includes(searchTerm);
  });

  return (
    <div>
      <Menu setUser={setUser} />
      <div className='page-contents ml-auto min-h-screen '>
        <div className=' px-10 py-5 ml-56'>
          <div className="header border mb-10 flex justify-between">
            <div className="search-bar items-center ">
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={handleSearch}
                className="p-2 border border-gray-300 rounded-3xl"
              />
            </div>
            <div className="user-info flex items-center mr-10 mt-2">
              <img className='w-10 h-10 rounded-full mr-2' src={Admin} alt="User Avatar" />
              <span className="font-bold text-gray-800">{user.username.toUpperCase()}</span>
            </div>
          </div>
          <div>
            <h1 className="text-center mb-5 font-extrabold text-4xl">Users 🐹</h1>
            <table className="min-w-full border border-gray-300 mx-4 my-10 shadow-md">
              <thead className="text-start">
                <tr>
                  <th className="py-2 px-4 text-left border-b w-1/3">User_id</th>
                  <th className="py-2 px-4 text-left border-b w-1/3">Username</th>
                  <th className="py-2 px-4 text-left border-b w-1/3">Email</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="py-2 px-4 border-b">{user.id}</td>
                    <td className="py-2 px-4 border-b">{user.username}</td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h1 className="text-center mb-5 font-extrabold text-4xl">Parcels 📦</h1>
            <table className="min-w-full border border-gray-300 mx-4 my-10 shadow-md">
              <thead className="text-start">
                <tr>
                  <th className="py-2 px-4 text-left border-b w-1/3">Parcel_id</th>
                  <th className="py-2 px-4 text-left border-b w-1/3">Recipient</th>
                  <th className="py-2 px-4 text-left border-b w-1/3">Status</th>
                </tr>
              </thead>
              <tbody>
                {parcels.map((parcel) => (
                  <tr key={parcel.id}>
                    <td className="py-2 px-4 border-b">{parcel.id}</td>
                    <td className="py-2 px-4 border-b">{parcel.recipient}</td>
                    <td className="py-2 px-4 border-b">{parcel.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
