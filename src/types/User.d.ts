export interface IAuth {
  email: string
  password: string
  [n: string]: any
}

export interface IUser extends IAuth {
  name: string
  token: string
}

export interface IUserModel extends IUser {
  get isLogged(): boolean
}
