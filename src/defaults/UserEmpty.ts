import UserModel from '@/models/UserModel'

const userEmpty: UserModel = new UserModel({
  name: '',
  email: '',
  password: '',
  token: '',
})

export default userEmpty
