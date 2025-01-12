export function LikeIcon(props: { isLike: boolean }) {
  if (props.isLike) {
    return (
      <svg width='21' height='18' viewBox='0 0 21 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M10.501 2.13615C12.85 0.0515804 16.48 -0.879215 18.7426 1.36238C21.0053 3.60397 21.083 7.17521 18.9786 9.50443L10.4999 17.8999L2.02138 9.50443C-0.0829518 7.17521 -0.00429177 3.59833 2.25736 1.36238C4.52157 -0.876101 8.14519 0.048486 10.501 2.13615Z'
          fill='#EF727A'
        />
      </svg>
    )
  }
  return (
    <svg width='21' height='18' viewBox='0 0 21 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.0036 2.69758L10.5014 3.1387L10.9988 2.69724C12.0803 1.73754 13.4429 1.05869 14.7608 0.869462C16.0642 0.682317 17.2845 0.973727 18.2147 1.8953L18.2148 1.89531C20.187 3.84914 20.2583 6.95374 18.4356 8.98678L10.4999 16.8446L2.5644 8.98678C0.741543 6.95347 0.814419 3.84369 2.78465 1.89585C3.71613 0.974959 4.936 0.683102 6.23858 0.869518C7.55572 1.05802 8.91853 1.73604 10.0036 2.69758Z'
        stroke='#333333'
        strokeWidth='1.5'
      />
    </svg>
  )
}