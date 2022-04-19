import { IUser, IUserModel } from '@/types/User'

export default class UserModel implements IUserModel {
  name: string
  email: string
  password: string
  token: string

  constructor(user: IUser) {
    this.name = user.name
    this.email = user.email
    this.password = ''
    this.token = user.token
  }

  get isLogged(): boolean {
    return !!this.token
  }
}
