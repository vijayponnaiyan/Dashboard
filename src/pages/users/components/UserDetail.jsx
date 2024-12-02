import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../../components/ui/Loader";

export default function UserDetail() {
  const { id } = useParams(); // Get the user ID from the route
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);



  

  const fetchUserDetail = async () => {
    if (!id) {
      console.error("User ID is missing!");
      console.log("User ID:", id); // Debugging missing ID
      setIsError(true);
      setIsLoading(false);
      return; // Early exit if ID is missing
    }

    try {
      console.log("Fetching user details for ID:", id); // Debugging the ID

      const response = await axios.get(`https://nodejs-x.vercel.app/api/users/${id}`);
      console.log("User data:", response.data); // Debugging the data
      setUser(response.data); // Set the user data
    } catch (error) {
      console.error("Failed to fetch user details:", error.message); // Debugging error
      setIsError(true); // Set error state if there's an issue
    } finally {
      setIsLoading(false); // End loading state
    }
  };



  useEffect(() => {
  

    fetchUserDetail();
  }, [id]);

  // Show loader while fetching data
  if (isLoading) {
    return (
      <div className="h-60 flex-center">
        <Loader />
      </div>
    );
  }

  // Show error message if the API fetch fails
  if (isError) {
    return (
      <div className="h-60 flex-center">
        <p className="text-red-500">Failed to load user details.</p>
      </div>
    );
  }

  // Show the user details if user data is successfully fetched
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
}
