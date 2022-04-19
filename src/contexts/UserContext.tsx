import userEmpty from '@/defaults/userEmpty'
import UserModel from '@/models/UserModel'
import UserService from '@/services/UserService'
import { IAuth, IUser, IUserModel } from '@/types/User'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface IUserContext {
  user: UserModel
  options: {
    login: (auth: IAuth) => Promise<boolean>
    logout: () => void
  }
}

const initialUserContext: IUserContext = {
  user: userEmpty,
  options: {
    login: async (auth: IAuth) => false,
    logout: () => {},
  },
}

const UserContext = createContext<IUserContext>(initialUserContext)

export function ContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserModel>(userEmpty)

  function writeLocalStorage(key: string, data: UserModel) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  function readLocalStorage(key: string): UserModel {
    const current = localStorage.getItem(key)
    if (!!current) {
      const data: IUser = JSON.parse(current)
      return new UserModel(data)
    } else {
      return userEmpty
    }
  }

  async function login(auth: IAuth) {
    const res = await UserService.login(auth)

    if (res.success && res.data) {
      writeLocalStorage('user', res.data)
      setUser(res.data)
      return true
    }
    return false
  }

  function logout() {
    const newUser = new UserModel({ ...user, token: '' })
    writeLocalStorage('user', newUser)
    setUser(new UserModel(newUser))
  }

  useEffect(() => {
    const current = readLocalStorage('user')
    if (!!current?.email) setUser(current)
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        options: { login, logout },
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
