import GenericController from './GenericController'
import { IAuth, IUserModel } from '@/types/User'
import MyResponse from '@/types/MyResponse'

export default class UserController extends GenericController {
  static async login(auth: IAuth): Promise<MyResponse<IUserModel>> {
    const route = 'http://localhost:3000/api/auth'
    const method = 'POST'
    const body = JSON.stringify(auth)

    const response = await this.makeRequest<MyResponse<IUserModel>>(route, {
      method,
      body,
    })

    if (response.success === false || !response.data) return { ...response }

    return response
  }
}
