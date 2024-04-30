import { PostData } from "../interfaces/PostData";

interface PostProps {
  post: PostData
}

export default function Post({ post }: PostProps) {
  return (
    <article>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </article>
  )
}