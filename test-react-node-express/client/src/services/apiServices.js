import axios from "axios";

const apiCall = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8080/api/students");
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default apiCall;
