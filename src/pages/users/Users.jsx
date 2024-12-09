import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { fetchUsers, createUser as createUserAPI } from "../../api/users";
import DrawerWrapper from "../../components/modal/DrawerWrapper";
import { Link } from "react-router-dom";

export default function Users() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    setError(null);
    try {
      const user = await createUserAPI(data);
      setList((prevList) => [...prevList, user]);
      reset(); // Clear form inputs
      setIsOpen(false); // Close the modal
      setSuccessMessage("User created successfully!");
      setTimeout(() => setSuccessMessage(null), 2000); // Clear success message after 2 seconds
    } catch (error) {
      setError(error.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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

      <DrawerWrapper isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add User">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              id="name"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              id="email"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              id="phone"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              {...register("address", { required: "Address is required" })}
              id="address"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.address ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              {...register("role", { required: "Role is required" })}
              id="role"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.role ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            >
              <option value="">Select a role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 text-white rounded-md ${
              isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </DrawerWrapper>

      {isLoading ? (
        <p className="text-blue-500 font-medium">Loading...</p>
      ) : error ? (
        <p className="text-red-500 font-medium">Error: {error}</p>
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
                </tr>
              </thead>
              <tbody>
                {list.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition`}
                  >
                    <td className="py-3 px-6 text-sm text-gray-800">
                      <Link to={`/users/${user.uuid}`} className="text-blue-500 hover:text-blue-700">
                        {user.name}
                      </Link>
                    </td>
                    <td className="py-3 px-6 text-sm text-gray-800">{user.email}</td>
                    <td className="py-3 px-6 text-sm text-gray-800">{user.phone}</td>
                    <td className="py-3 px-6 text-sm text-gray-800">{user.address}</td>
                    <td className="py-3 px-6 text-sm text-gray-800 capitalize">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 text-center">No users found.</p>
          )}
        </div>
      )}
    </div>
  );
}
