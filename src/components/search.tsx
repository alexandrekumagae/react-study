import { memo } from "react"

interface SearchProps {
  handleSearch: (text: string) => void
}

function Search({ handleSearch }: SearchProps) {
  console.log('rendered')

  return (
    <>
      <input type="text" id="search" onChange={(e) => handleSearch(e.target.value)} />
    </>
  )
}

export default memo(Search)