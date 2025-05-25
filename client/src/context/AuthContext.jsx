import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user on mount
  useEffect(() => {
    async function fetchUser() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:3000/api/user/me", {
          credentials: "include",
        });

        if (!res.ok) {
          setUser(null);
        } else {
          const data = await res.json();
          setUser(data.data);
        }
      } catch (err) {
        console.error("Auth fetch error:", err);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, []);

  const login = async (email, password) => {
    const res = await fetch("http://localhost:3000/api/user/login", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();
    setUser(data.data);
    return data;
  };

const logout = async () => {
  try {
   const res= await fetch("http://localhost:3000/api/user/logout", {
      method: "GET",
      credentials: "include",
    });
    await res.json()
    setUser(null);
  } catch (err) {
    console.error("Logout failed:", err.message);
    alert("Logout failed. Please try again.");
  }
};

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
