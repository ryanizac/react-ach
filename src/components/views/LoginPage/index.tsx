import { useUserContext } from '@/contexts/UserContext'
import { FormEvent, useState } from 'react'
import styles from './styles.module.css'

export default function LoginPage() {
  const [email, setEmail] = useState<string>('ryan@gmail.com')
  const [password, setPassword] = useState<string>('1234')
  const { user, options } = useUserContext()

  async function handle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const auth = { email, password }
    const res = await options.login(auth)
    console.log(res)
  }

  return (
    <div>
      {!user.isLogged ? (
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
          <h2>Você está logado(a), {user.name}!</h2>
          <p>Clique abaixo para deslogar</p>
          <button onClick={() => options.logout()}>Deslogar</button>
        </div>
      )}
    </div>
  )
}
