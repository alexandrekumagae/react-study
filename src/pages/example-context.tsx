import { useState } from "react";
import { UserData } from "../components/user-data";
import { Dashboard } from "../components/dashboard";
import { UserContext } from "../contexts/userContext";

interface UserData {
  login: string
  email: string
}

export function ExampleContext() {
  const [user] = useState<UserData>({
    login: "Alexandre",
    email: "alexandre@movedigital.com.br"
  })

  return (
    <>
      <UserContext.Provider value={user}>
        <Dashboard />
      </UserContext.Provider>
    </>
  )
}