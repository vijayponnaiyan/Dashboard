import baseAPI from "./baseAPI";

export const fetchUsers = async () => {
  try {
    const data = await baseAPI.get("/users");
    return data;
  } catch (error) {
    throw error;
  }
};


export  const fetchUserById = async (id) => {
    try {
      const data = await baseAPI.get(`/users/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }