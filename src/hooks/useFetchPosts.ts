import { useEffect, useState } from "react"

import { api } from "../lib/api"

import { PostData } from "../interfaces/PostData"

export function useFetchPosts() {
  const [posts, setPosts] = useState<PostData[]>()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  async function fetchPosts() {
    try {
      const response = await api.get('/posts?userId=1')

      if (response.status !== 200) {
        setError('Erro na requisição!');
      }
    
      setPosts(response.data)
    } catch(error) {
      setError(`Erro na requisição: ${error}`);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchPosts()
  }, [])

  return { posts, error, loading }
}