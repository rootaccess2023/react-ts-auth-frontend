import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { authState, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (!authState.isAuthenticated) {
    navigate("/login");
    return null;
  }

  return (
    <div className="mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Welcome to the Dashboard
        </h1>

        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <h2 className="text-lg font-semibold mb-2">User Information</h2>
          <p>
            <strong>Email:</strong> {authState.user?.email}
          </p>
          <p>
            <strong>User ID:</strong> {authState.user?.id}
          </p>
        </div>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
