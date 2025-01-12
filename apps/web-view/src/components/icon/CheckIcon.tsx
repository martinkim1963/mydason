import * as React from 'react'

export function CheckIcon(props: { checked?: boolean }) {
  const { checked = false } = props

  if (checked) {
    return (
      <svg width='23' height='24' viewBox='0 0 23 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='0.5' y='1' width='22' height='22' rx='7.5' fill='#5D7CFF' stroke='#5D7CFF' />
        <path d='M6 11.5L10 15.5L17 8.5' stroke='white' strokeWidth='1.8' strokeLinecap='round' />
      </svg>
    )
  }
  return (
    <svg width='23' height='24' viewBox='0 0 23 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect x='0.5' y='1' width='22' height='22' rx='7.5' fill='white' stroke='#DFDFDF' />
      <path d='M6 11.5L10 15.5L17 8.5' stroke='#DDD' strokeWidth='1.8' strokeLinecap='round' />
    </svg>
  )
}
