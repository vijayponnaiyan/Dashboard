import baseAPI from "./baseAPI";

const fetchData = async () => {
  try {
    const data = await baseAPI.get("/users");
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
