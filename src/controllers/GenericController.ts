import MyResponse from '@/types/MyResponse'

export default class GenericController {
  static async makeRequest<T>(
    route: string,
    params: RequestInit
  ): Promise<MyResponse<T>> {
    try {
      const response = await fetch(route, params)
      const data = await response.json()
      return { success: true, message: data.message, data }
    } catch (err: any) {
      return { success: false, message: 'internal error' }
    }
  }
}
