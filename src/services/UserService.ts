import type MyResponse from '@/types/MyResponse'
import type { IAuth } from '@/types/User'
import UserModel from '@/models/UserModel'

export default class UserService {
  static async login(auth: IAuth): Promise<MyResponse<UserModel>> {
    const route = 'http://localhost:3000/api/auth'
    const method = 'POST'
    const body = JSON.stringify(auth)

    try {
      const res = await fetch(route, { method, body })
      const json: MyResponse<UserModel> = await res.json()

      if (json.success === false || !json.data) return json

      const data = new UserModel(json.data)
      return { success: true, message: json.message, data }
    } catch (_err: any) {
      return { success: false, message: 'internalError' }
    }
  }
}
