import React, { useState, useEffect } from "react";
import { fetchUsers } from "../../../api/users";
import Loader from "../../../components/ui/Loader";
import EmptyState from "../../../components/ui/EmptyState";
import UserBodytable from "../../users/components/UserBodytable";


export default function UserInfo() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchPost = async () => {
    try {
      const response = await fetchUsers();
      setList(response);
    } catch (error) {
      setIsError(true);
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (isLoading) {
    return (
      <div className="h-60 flex-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-60 flex-center w-full">
        <p className="text-red-500">Failed to load user information.</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {Array.isArray(list) && list.length === 0 ? (
        <div className="flex-center h-60 w-full">
          <EmptyState />
        </div>
      ) : (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Phone</th>
              <th scope="col" className="px-6 py-3">Address</th>
              <th scope="col" className="px-6 py-3">Role</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((user) => (
              <UserBodytable key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
