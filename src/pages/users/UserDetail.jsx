import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../api/userone";
import {Loader} from "../../components/ui/Loader";



const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchUser = async () => {
    try {
      const data = await fetchUserById(id);
      setUser(data);
    } catch (err) {
      setError(err.message);
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
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-60 flex-center w-full">
        <ErrorState />
      </div>
    );
  }

  if (!user) return <div>No user found</div>;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto space-y-6">
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center text-3xl font-bold">
        {user.name.charAt(0)}
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mt-4">{user.name}</h1>
      <p className="text-gray-500">{user.email}</p>
      <p className="text-gray-500">{user.phone}</p>
    </div>
  
    <hr className="border-gray-300" />
  
    {user.hobbies && (
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Hobbies</h2>
        <div className="flex flex-wrap gap-2">
          {user.hobbies.map((hobby, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 text-blue-600 text-sm rounded-full"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>
    )}
  
    {user.skills && (
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {user.skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-green-100 text-green-600 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
  
  );
};

export default UserDetail;
