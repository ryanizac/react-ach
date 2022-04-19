import MyResponse from '@/types/MyResponse'
import { IAuth, IUser } from '@/types/User'
import type { NextApiRequest, NextApiResponse } from 'next'

const users: IUser[] = [
  {
    name: 'ryan',
    email: 'ryan@gmail.com',
    password: '1234',
    token: '235456',
  },
  {
    name: 'johny',
    email: 'johny@gmail.com',
    password: 'abcd',
    token: 'pdngopwsd',
  },
  {
    name: 'pablo',
    email: 'pablo@gmail.com',
    password: '1a2b',
    token: 'apospa22983',
  },
]

export default function handle(
  request: NextApiRequest,
  response: NextApiResponse<MyResponse<IUser>>
) {
  if (request.method !== 'POST') {
    return response.status(403).json({
      success: false,
      message: 'invalid POST',
    })
  }

  const body: IAuth = JSON.parse(request.body)
  const found: IUser | undefined = users.find(
    (us) => us.email === body.email && us.password === body.password
  )
  const status: number = 200
  const json: MyResponse<IUser> = {
    success: !!found,
    message: !!found ? 'bem vindo' : 'usuário não encontrado',
    data: found,
  }

  return response.status(status).json(json)
}
