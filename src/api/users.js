import baseAPI from "./baseAPI";

export const fetchUsers = async () => {
  try {
    const data = await baseAPI.get("/users");
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchUserById = async (id) => {
  try {
    const data = await baseAPI.get(`/users/${id}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const createUser = async (userData) => {
  try {
    const response = await baseAPI.post("/users", userData);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
