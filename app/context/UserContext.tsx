"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { GetMyProfileResponse } from "../lib/types/home";

type UserContextType = {
  user: GetMyProfileResponse | null;
  setUser: (user: GetMyProfileResponse) => void;
};

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<GetMyProfileResponse | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
