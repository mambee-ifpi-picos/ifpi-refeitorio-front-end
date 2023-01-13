import { useState, useEffect } from 'react'

function Teste() {
  const [users, setUsers] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    // endereco que viras os dados, e depois salvar(pesquisar na documentacao).
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        console.log(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!users) return <p>No profile data</p>

  return (
    <div>
      <h1>Nomes</h1>
      {users.map((user) => (
        <p key={user.name}>{user.name}</p>
        ))}
    </div>
  )
}

export default Teste
