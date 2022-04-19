export default interface MyResponse<T> {
  success: boolean
  message: string
  data?: T
}
