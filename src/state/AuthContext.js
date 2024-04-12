import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const initialState = {
  user: {
    _id: "66151ce096b8abb5de38160f",
    username: "test_user1",
    password: "123456",
    isAdmin: false,
  },
  // user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
