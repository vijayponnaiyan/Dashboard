import baseAPI from "./baseAPI";

export const fetchUsers = async () => {
  try {
    const data = await baseAPI.get("/users");
    return data;
  } catch (error) {
    throw error;
  }
};
