export function SignInForm() {
  function handleSubmit() {
    alert('Form enviado!')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input type="text" id="name" required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}