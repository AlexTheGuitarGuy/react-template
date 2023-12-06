import { instance } from '../api'

export const postsApi = {
  getPosts: async () => {
    const response = await instance.get<
      {},
      {
        status: number
        data: { id: number; title: string; author: string }[]
      }
    >('/posts')

    return response
  },
}
