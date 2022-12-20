import { MouseEvent } from 'react'

interface ButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  children?: string
  className?: string
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      className={`btn rounded-pill btn-sm px-3 py-2 fs-6 border d-fle align-items-center fw-semibold border-2 btn-primary shadow-sm ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
