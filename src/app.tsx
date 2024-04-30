import { Suspense, lazy } from "react";

import { useFetchPostsWithReactQuery } from "./hooks/useFetchPostsWithReactQuery";

const Post = lazy(() => import("./components/post"));

import styled from "styled-components"

function App() {
  const { posts } = useFetchPostsWithReactQuery()

  const Container = styled.div`
    max-width: ${({ theme }) => {
      return theme.container.base;
    }};
    margin: 0 auto;
    padding: 0 20px;
  `

  return (
    <>
      <Container>
        <h3>Posts</h3>

        <Suspense fallback={<p>Carregando posts...</p>}>
          <div>
            {posts && posts.map(post => (
              <div key={post.id}>
                <Post post={post} />
              </div>
            ))}
          </div>
        </Suspense>
      </Container>
    </>
  )
}

export default App
