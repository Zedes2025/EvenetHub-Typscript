import { createContext, useContext, useState, useEffect } from "react";

type AuthContextType = {
  //--- define context value type
  isAuthenticated: boolean;
  user: string;
  loading: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

type AuthProviderProps = {
  //--- define props type
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: AuthProviderProps) {
  //--- specify props type
  const [user, setUser] = useState("Guest");
  const [token, setToken] = useState<string | null>(null); //--- specify token can be string or null

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);
  const logout = () => {
    setIsAuthenticated(false);
    setUser("Guest");
    setToken(null);
    localStorage.removeItem("token");
  };
  const login = async (email: string, password: string) => {
    //--- specify parameter types
    const res = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json(); // read error message from API
      throw new Error(errorData.message || "Invalid email or password");
    }

    const data = await res.json(); // { token: "..." }
    console.log(data);
    localStorage.setItem("token", data.token);
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth(): AuthContextType {
  //--- specify return type
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
