import { useEffect, useRef } from "react"

export default function ExampleUseRef() {
  const labelRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    labelRef.current.innerHTML = "Teste"
  }, [])

  function handleFormSubmit(e) {
    e.preventDefault()

    console.log('submit')
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label ref={labelRef}>Nome</label>
      </div>
      <div>
        <input ref={inputRef} type="text" />
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}