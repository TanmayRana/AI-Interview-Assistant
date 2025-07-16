// import { createContext } from "react";

// export const UserDetailContext = createContext(null);

import { createContext } from "react";
import { User } from "@/lib/type";

export interface UserDetailContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Default value is undefined to enforce usage within provider
export const UserDetailContext = createContext<
  UserDetailContextType | undefined
>(undefined);
