import React, { useState, useEffect } from "react";
import { fetchUsers } from "../../api/users";
import DrawerWrapper from "../../components/modal/DrawerWrapper";
import { Link } from "react-router-dom";
import FromData from "../../components/forms/FromData";
import EditIcon from "../../assets/EditIcon";
import DeleteIcon from "../../assets/DeleteIcon";
import Loader from "../../components/ui/Loader"
import ErrorStat from "../../components/ui/ErrorState"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <p className="text-red-500 font-medium">Error: {this.state.error.message}</p>;
    }
    return this.props.children;
  }
}

export default function Users() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const fetchUsersList = async () => {
    setIsLoading(true);
    try {
      const users = await fetchUsers();
      setList(users);
    } catch (error) {
      setError(error.message || "Failed to fetch users");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsersList();
  }, []);

  return (
    <ErrorBoundary>
      <div className="p-4 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-xl md:text-3xl font-bold">Users</h2>
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5"
          >
            + Add User
          </button>
        </div>

        {isLoading ? (
          <div className="text-blue-500 font-medium"><Loader/></div>
        ) : error ? (
          <p className="text-red-500 font-medium">< ErrorStat/></p>
        ) : successMessage ? (
          <p className="text-green-500 font-medium">{successMessage}</p>
        ) : (
          <div className="overflow-x-auto">
            {list.length > 0 ? (
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Phone</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Address</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Role</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Edit</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((user, index) => (
                    <tr
                      key={user?.uuid || index} // Use index as a fallback key if uuid is undefined
                      className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition`}
                    >
                      <td className="py-3 px-6 text-sm text-gray-800">
                        <Link to={`/users/${user?.uuid}`} className="text-blue-500 hover:text-blue-700">
                          {user.name}
                        </Link>
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-800">{user.email}</td>
                      <td className="py-3 px-6 text-sm text-gray-800">{user.phone}</td>
                      <td className="py-3 px-6 text-sm text-gray-800">{user.address}</td>
                      <td className="py-3 px-6 text-sm text-gray-800 capitalize">{user.role}</td>
                      <td className="py-3 px-6 text-sm text-gray-800 capitalize">
                        <button type="button">
                          <EditIcon />
                        </button>
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-800 capitalize">
                        <button type="button">
                          <DeleteIcon />
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 text-center">No users found.</p>
            )}
          </div>
        )}

        <DrawerWrapper isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add User">
          <FromData
            onSuccess={(message) => {
              setSuccessMessage(message);
              setIsOpen(false);
              fetchUsersList(); // Refresh user list after adding a user
            }}
            onError={(message) => setError(message)}
          />
        </DrawerWrapper>
      </div>
    </ErrorBoundary>
  );
}
