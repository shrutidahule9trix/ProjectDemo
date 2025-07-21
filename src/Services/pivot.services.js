import axiosInstance from "./axios";

export const fetchPivotTable = async () => {
  try {
    const response = await axiosInstance.get("/table");
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching pivot data:", error);
    return []; 
  }
};

                     