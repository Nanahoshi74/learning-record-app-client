import axios from "axios";

export const loginCall = async (user, dispatch) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await axios.post(`${backendUrl}/auth/login`, user);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "LOGIN_ERROR", payload: err });
  }
};
