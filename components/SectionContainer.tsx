import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  noContainer?: boolean
}

export default function SectionContainer({ children, noContainer }: Props) {
  return <section className={noContainer ? '' : 'custom-container'}>{children}</section>
}
