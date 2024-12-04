import React from "react";

export default function Modal({ toggleModal }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {/* Modal */}
            <div
                id="top-right-modal"
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-800 bg-opacity-50"
            >
                <div className="relative w-full max-w-lg">
                    {/* Modal Content */}
                    <div className="bg-white rounded-lg shadow-xl dark:bg-gray-800">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-600">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                Add User
                            </h3>
                            <button
                                type="button"
                                onClick={toggleModal}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal Body */}
                        <div className="p-6 space-y-5">
                            <h5 className="text-lg font-medium text-gray-800 dark:text-white">
                                Create Your Account
                            </h5>
                            <form className="space-y-4">
                                {/* Name Field */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
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
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
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
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
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
                                    <input
                                        type="text"
                                        id="role"
                                        placeholder="Enter role"
                                        className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    />
                                </div>
                                {/* Remember Checkbox */}
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="w-4 h-4 text-blue-600 bg-gray-50 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="remember"
                                        className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                                    >
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
