import { useContext } from "react"

import { UserContext } from "../contexts/userContext"

export function UserData() {
  const user = useContext(UserContext)

  return (
    <>
      <div>Login: {user?.login}</div>
      <div>E-mail: {user?.email}</div>
    </>
  )
}