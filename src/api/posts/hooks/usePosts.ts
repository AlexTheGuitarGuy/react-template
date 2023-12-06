import { useQuery } from '@tanstack/react-query'
import { postsApi } from '../posts-api'
import { QUERY_KEYS } from '../../keys'

const postsQuery = async () => {
  const result = await postsApi.getPosts()
  if (result.status >= 400) {
    throw new Error('Error fetching posts')
  }
  return result.data
}

export const usePosts = () => {
  return useQuery({
    queryFn: postsQuery,
    queryKey: [QUERY_KEYS.posts],
  })
}
