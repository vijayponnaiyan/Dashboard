import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../../components/ui/Loader"; // Ensure this is correct
import {fetchUserById} from "../../api/users";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      const data = await fetchUserById(id); // Ensure this function works
      setUser(data);
  
    } catch (err) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();

  }, [id]);

  if (loading) {
    return (
      <div className="h-60 flex-center">
        <Loader /> {/* Ensure Loader is imported */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-60 flex-center w-full">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-60 flex-center">
        <p>No user found</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
    {/* Header Section */}
    <div className="flex items-center mb-6 border-b pb-4">
      <div className="h-20 w-20 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow">
        {user.name.charAt(0).toUpperCase()}
      </div>
      <div className="ml-4">
        <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
        <p className="text-sm text-gray-500">{user.role}</p>
      </div>
    </div>
  
    {/* Details Section */}
    <div className="space-y-6">
      <div className="flex items-center">
        <span className="w-20 text-sm text-gray-500 font-medium">Email:</span>
        <span className="text-gray-800">{user.email}</span>
      </div>
      <div className="flex items-center">
        <span className="w-20 text-sm text-gray-500 font-medium">Phone:</span>
        <span className="text-gray-800">{user.phone}</span>
      </div>
      <div className="flex items-center">
        <span className="w-20 text-sm text-gray-500 font-medium">Role:</span>
        <span className="text-gray-800">{user.role}</span>
      </div>
    </div>
  
    {/* Action Section */}
    <div className="mt-6 flex justify-end space-x-3">
      <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md shadow hover:bg-blue-600 transition">
        Edit Profile
      </button>
      <button className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-md shadow hover:bg-red-600 transition">
        Delete
      </button>
    </div>
  </div>
  
  
  );
};

export default UserDetail;
