import axiosInstance from "./axios";

// Fetch todo data
export const fetchTodoData = async () => {
  try {
    const response = await axiosInstance.get("/todos/1");
    console.log("API Response:", response.data); 
    return response.data;
  } catch (error) {
    console.error("Error fetching todo:", error);
    return null;
  }
};
