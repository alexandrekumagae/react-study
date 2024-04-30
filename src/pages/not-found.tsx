export function NotFound() {
  return (
    <>
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
      <a href="#" onClick={() => history.go(-1)}>Voltar</a>
    </>
  )
}