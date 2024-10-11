import { useNavigate } from "react-router-dom";
import React, { useState, useCallback } from "react";

const Home = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  const handleLogout = () => {
    localStorage.removeItem('login-system'); 
    
    alert("You have been logged out.");
    navigate('/login'); 
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
    <div className="max-w-lg h-96 w-96 p-4 bg-gray-200 rounded shadow-md">
        <div className="flex flex-col p-4">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Enter Your Room Id"
            className="w-full p-2 pl-10 text-sm text-gray-700 border mt-6"
          />

          <button
            onClick={handleJoinRoom}
            className="bg-blue-400 hover:bg-blue text-white font-bold py-2 px-4 mt-10 rounded"
          >
            Join
          </button>

          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 mt-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
