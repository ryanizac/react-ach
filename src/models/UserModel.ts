import { IUser, IUserModel } from '@/types/User'
import GenericModel from './GenericModel'

export default class UserModel extends GenericModel implements IUserModel {
  email: string
  password: string
  name: string
  token: string

  constructor(user: IUser) {
    super()
    this.email = user.email
    this.password = ''
    this.name = user.name
    this.token = user.token
  }

  get isLogged(): boolean {
    return !!this.token
  }
}
