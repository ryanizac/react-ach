import { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

export default function Content(props: ContentProps) {
  return <div>{props.children}</div>
}
