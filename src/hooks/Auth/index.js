import { createContext, useContext, useEffect, useState } from "react";
import {useUsersDatabase} from "../../database/useUsersDatabase"; 

const AuthContex = createContext({});

export const Role = {
  SUPER: "SUPER",
  ADMIN: "ADMIN",
  USER: "USER",
};
export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    autenticaded: null,
    user: null,
    role: null,
  });

  const { authUser } = useUsersDatabase();

  const signIn = async ({ email, password }) => {
    const response = await authUser({ email, password });
    console.log(response);

    if (!response) {
      setUser({
        autenticaded: false,
        user: null,
        role: null,
      });
      throw new Error("Usuário ou senha inválidos");
    }

    

    setUser({
      autenticaded: true,
      user: response,
      role: response.role,
    });

       
  };

  const signOut = async () => {
    setUser({});
  };

  useEffect(() => {
    console.log("AuthProvider: ", user);
  }, [user]);

  return (
    <AuthContex.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContex.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContex);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
