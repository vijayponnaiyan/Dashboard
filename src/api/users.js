import baseAPI from "./baseAPI";

export const fetchUsers = async () => {
  try {
    const data = await baseAPI.get("/users");
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchUserById = async (id) => {
  try {
    const data = await baseAPI.get(`/users/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData) => {
  console.log(userData);
  try {
    const response = await baseAPI.post("/users", userData);
    return response.data; // Adjust based on your API's response structure
  } catch (error) {
    console.error("Error creating user:", error.response?.data || error.message);
    throw new Error(error);
  }
};
