import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "../../../assets/EditIcon";
import DeleteIcon from "../../../assets/DeleteIcon";

export default function UserBodytable({ user }) {
  return (
    <Link to={`/users/${user.id}`}>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {user.id}
        </td>
        <td className="px-6 py-4">{user.name}</td>
        <td className="px-6 py-4">{user.email}</td>
        <td className="px-6 py-4">{user.phone}</td>
        <td className="px-6 py-4">{user.address}</td>
        <td className="px-6 py-4">{user.role}</td>
        <td className="px-6 py-4 flex gap-2">
          <button type="button" aria-label="Edit user">
            <EditIcon />
          </button>
          <button type="button" aria-label="Delete user">
            <DeleteIcon />
          </button>
        </td>
      </tr>
    </Link>
  );
}
