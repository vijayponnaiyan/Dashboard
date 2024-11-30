import React, { useState, useEffect } from "react";
import { fetchUsers } from "../../../api/users";
import Loader from "../../../components/ui/Loader";
import EditIcon from "../../../assets/EditIcon";
import DeleteIcon from "../../../assets/DeleteIcon";
import EmptyState from "../../../components/ui/EmptyState";

export default function UserInfo() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchPost = async () => {
    try {
      const response = await fetchUsers();
      setList(response);
    } catch (error) {
      setIsError(error.messsage);
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
        <ErrorState />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Info</h1>
      <div className="relative overflow-x-auto">
        {list?.length === 0 ? (
          <div className="flex-center h-60 w-full">
            <EmptyState />
          </div>
        ) : (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
              {list?.map((user) => (
                <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.id}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button type="button">
                      <EditIcon />
                    </button>
                    <button type="button">
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
