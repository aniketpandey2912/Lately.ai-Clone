import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate } from "react-router-dom";

export function PrivateRouting({ children }) {
  const { isAuth } = useContext(AuthContext);

  // Retrun Back To Home If Not Authorised
  if (!isAuth) {
    return <Navigate to="/signup"></Navigate>;
  }

  return children;
}
