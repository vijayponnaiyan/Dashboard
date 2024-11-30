import React from "react";
import UserInfo from "./components/UserInfo";

export default function Users() {
  return (
    <>
      <div className="p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Heading Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl md:text-3xl font-semibold">Team Members</h2>
            <p className="mt-2 text-sm md:text-base">Manage your team members and their account permissions here.</p>
          </div>

          {/* Button Section */}
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <button
              type="button"
              className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200"
            >
              + Add team member
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="p-3">
          <hr />
        </div>
        <div>
          <UserInfo />
        </div>
      </div>
    </>
  );
}
