import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState("Guest");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = (email, password) => {
    setIsAuthenticated(true);
    setUser({ email });
    setToken("mock-token");
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser("Guest");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
