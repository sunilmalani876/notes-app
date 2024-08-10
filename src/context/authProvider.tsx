import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";

type AuthProviderProps = {
  token: string | null;
  setToken: (token: string) => void;
};

export const AuthContext = createContext<null | AuthProviderProps>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [token, setToken] = useState<string | null>(
    Cookies.get("token") || null
  );

  //   const [user, setUser] = useState(null);

  useEffect(() => {
    // if (!user) {
    // const fetCurrentUser = async () => {
    //   const res = await fetch(
    //     `${import.meta.env.VITE_BASE_URL1}/auth/crnt-usr`,
    //     {
    //       method: "GET",
    //       headers: {
    //         Accept: "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   const result = await res.json();
    //   // console.log(result);
    //   if (result.success) {
    //     setUser(result.data);
    //   }
    // };
    // fetCurrentUser();
    // }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("useAuth must be used within a AuthContextProvider");

  return context;
};
