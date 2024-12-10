import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../../components/ui/Loader"; // Ensure this is correct
import { fetchUserById } from "../../api/users";
import ErrorState from "../../components/ui/ErrorState";
import EmptyState from "../../components/ui/EmptyState";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
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
  }, []);

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
        <ErrorState />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-60 flex-center">
        <EmptyState />
      </div>
    );
  }

  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto space-y-8">
        {/* User Header Section */}
        <div className="flex items-center space-x-6">
          <div className="flex-shrink-0">
            <img className="h-32 w-32 rounded-full border-4 border-indigo-500" src={user.image} alt="User profile" />
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-500">Role: {user.role}</p>
            <p className="mt-2 text-sm text-gray-500">Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
            <div className="mt-4 flex space-x-6">
              <a href={`mailto:${user.email}`} className="text-indigo-600 hover:text-indigo-800">
                {user.email}
              </a>
              <a href={`tel:${user.phone}`} className="text-indigo-600 hover:text-indigo-800">
                {user.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Bio</h3>
          <p className="mt-2 text-gray-600">{user.bio}</p>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <ul className="mt-2 space-y-4">
            <li className="flex items-center space-x-2 text-gray-600">
              <span className="text-gray-400">📝</span>
              <span className="text-gray-900">Updated profile picture</span>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-600">
              <span className="text-gray-400">📚</span>
              <span className="text-gray-900">Completed React Course</span>
              <span className="text-sm text-gray-500">3 days ago</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-600">
              <span className="text-gray-400">💬</span>
              <span className="text-gray-900">Commented on "Tailwind CSS Tips"</span>
              <span className="text-sm text-gray-500">1 week ago</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons Section */}
        <div className="flex space-x-4">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
