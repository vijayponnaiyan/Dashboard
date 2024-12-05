import React from "react";
import { useState } from "react";
import UserInfo from "./components/UserInfo";
// import Modal from "../../components/ui/Modal";
import DrawerWrapper from "../../components/modal/DrawerWrapper";

export default function Users() {
  // const [isModalOpen, SetIsModalOpen] = useState(false);
  const [isOPen, setIsOpen] = useState(false);

  // const toggleModal = () => {
  //   SetIsModalOpen((prev) => !prev);
  // };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Heading Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl md:text-3xl font-semibold">Users</h2>
          <p className="mt-2 text-sm md:text-base">Manage your User and their account permissions here.</p>
        </div>

        {/* Button Section */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            + Add User
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="p-3">
        <hr />
      </div>
      {/* User Information */}
      <UserInfo />
      {/* <>{isModalOpen && <Modal toggleModal={toggleModal} />}</> */}
      <DrawerWrapper
        isOpen={isOPen}
        onClose={() => setIsOpen(false)}
        title="Add User"
        onSubmit={() => console.log("hi")}
      >
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@company.com"
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              placeholder="+91 7855432259"
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          {/* Role Field */}
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Role
            </label>
            <select
              id="role"
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="admin">--Select-Role--</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-600 bg-gray-50 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Remember me
            </label>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-900"
          >
            Add Your Account
          </button>

        </form>
      </DrawerWrapper>
    </div>
  );
}
