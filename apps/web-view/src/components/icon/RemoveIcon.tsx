import * as React from 'react'

export function RemoveIcon(props: { isLine?: boolean }) {
  if (props.isLine) {
    return (
      <svg width='24' height='24' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M6 6.5L12 12.5M12 6.5L6 12.5' stroke='#aaa' strokeLinecap='round' />
      </svg>
    )
  }
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='9' cy='9' r='9' fill='#D9D9D9' />
      <path d='M6 6.5L12 12.5M12 6.5L6 12.5' stroke='white' strokeLinecap='round' />
    </svg>
  )
}
