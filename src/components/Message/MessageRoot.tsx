import { ReactNode } from "react"

interface MessageRootProps {
  children: ReactNode
}

export function MessageRoot({ children }: MessageRootProps) {
  return (
    <>
      <article>
        {children}
      </article>
    </>
  )
}