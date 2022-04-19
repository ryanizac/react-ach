import { FormEvent, useState } from 'react'
import styles from './styles.module.css'

export default function LoginPage() {
  const [email, setEmail] = useState<string>('ryan@gmail.com')
  const [password, setPassword] = useState<string>('1234')
  const isLogged = false

  async function handle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const auth = { email, password }
    console.log(auth)
  }

  return (
    <div>
      {isLogged ? (
        <>
          <h2>login</h2>
          <form onSubmit={handle} className={styles.formLogin}>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </>
      ) : (
        <div className={styles.infoLogin}>
          <h2>Você está logado(a)!</h2>
          <p>Clique abaixo para deslogar</p>
          <button onClick={() => {}}>Deslogar</button>
        </div>
      )}
    </div>
  )
}
