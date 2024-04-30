import { ReactNode } from "react"

interface MessageContentProps {
  children: ReactNode
}

export function MessageContent({ children }: MessageContentProps) {
  return (
    <>
      {children}
    </>
  )
}