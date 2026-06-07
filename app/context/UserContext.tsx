"use client";

import { createContext, useContext, type ReactNode } from "react";

export type User = {
  name: string;
  username: string;
  email: string;
  avatar: string;
  /** wallet balance in naira */
  balance: number;
  division: string;
  rank: number;
  xp: number;
};

/** Placeholder user until a real auth/session source is wired in. */
const DEFAULT_USER: User = {
  name: "George Omoh",
  username: "georgekyrian123",
  email: "george@example.com",
  avatar: "/images/avatar.png",
  balance: 24500,
  division: "Gold",
  rank: 4,
  xp: 1988,
};

const UserContext = createContext<User>(DEFAULT_USER);

export function UserProvider({
  children,
  user = DEFAULT_USER,
}: {
  children: ReactNode;
  user?: User;
}) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
