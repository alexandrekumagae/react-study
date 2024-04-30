import { useCallback, useState } from "react"
import { shuffleArray } from "../utils/shuffle-array"
import Search from "../components/search"

const allUsers = [
  "john",
  "alex",
  "george",
  "simon",
  "james"
]

export function ExampleUseCallback() {
  const [users, setUsers] = useState(allUsers)
  const [name, setName] = useState('')

  function handleShuffleUsers() {
    setUsers(shuffleArray(users))
  }

  const handleSearch = useCallback((text: string) => {
    const filteredUsers = allUsers.filter(user =>
      user.includes(text),
    )
    setUsers(filteredUsers)
  }, [users])

  return (
    <>
      <h1>Use Callback</h1>
      
      <div>
        <button onClick={handleShuffleUsers}>Shuffle</button>
        <Search handleSearch={handleSearch} />
      </div>

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      <br />

      <div>
        <div>
          <strong>{name}</strong>
        </div>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
    </>
  )
}