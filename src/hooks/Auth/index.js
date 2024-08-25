import { createContext, useContext, useEffect, useState } from "react";

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

  const signIn = async ({ email, password }) => {
    if (email === "super@email.com" && password === "Super123!") {
      setUser({
        autenticaded: true,
        user: { id: 1, name: "Super", email },
        role: Role.SUPER,
      });
    } else if (email === "adm@email.com" && password === "Adm123!") {
      setUser({
        autenticaded: true,
        user: { id: 2, name: "Administrador", email },
        role: Role.ADMIN,
      });
    } else if (email === "user@email.com" && password === "User123!") {
      setUser({ 
        autenticaded: true,
        user: { id: 3, name: "Usuário Comun", email },
        role: Role.USER,
       });
    } else {
        setUser({ 
            autenticaded: false, user: null, role: null });
        }
    
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
