import { createContext } from "react";

interface UserData {
  login: string
  email: string
  changeLogin?: (newLogin: string) => void
}

export const UserContext = createContext<UserData | undefined>(undefined)