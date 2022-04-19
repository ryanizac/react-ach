import { useUserContext } from '@/contexts/UserContext'

export default function HomePage() {
  const { user } = useUserContext()

  return (
    <h1>
      {user.isLogged ? `bem vindo, ${user.name}!` : 'Você ainda não fez login'}
    </h1>
  )
}
