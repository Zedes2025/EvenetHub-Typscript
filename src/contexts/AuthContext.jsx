import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState("Guest");
  const [token, setToken] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = (email, password) => {
    setIsAuthenticated(true);
    setUser({ email });
    setToken("dummy-token");
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser("Guest");
    setToken(null);
  };
  const register = (email, password) => {
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        token,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
