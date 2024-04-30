import { api } from "../lib/api"

import { PostData } from "../interfaces/PostData"

import { useQuery } from "@tanstack/react-query";

export function useFetchPostsWithReactQuery() {
  const { data: posts, isLoading, error } = useQuery<PostData[]>({
    queryFn: async () => {
      const response = await api.get('/posts?userId=1');
      if (response.status != 200) {
        throw new Error('Erro na requisição!');
      }
      return response.data;
    },
    queryKey: ['posts'],
  });

  return { posts, isLoading, error };
}
