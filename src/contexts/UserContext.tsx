import userEmpty from '@/defaults/userEmpty'
import useLocalStorage from '@/hooks/useLocalStorage'
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
  const {
    genericState: user,
    writeStorage: write,
    updateStorage: update,
  } = useLocalStorage<IUser, UserModel>({
    key: 'user',
    empty: { name: '', email: '', password: '', token: '' },
    validator: 'name',
    model: (v) => new UserModel(v),
  })

  async function login(auth: IAuth) {
    const res = await UserService.login(auth)
    if (res.success && res.data) {
      write(res.data)
      return true
    }
    return false
  }

  function logout() {
    update({ token: '' })
  }

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
