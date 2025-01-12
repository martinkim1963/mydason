export default function InfoIcon(props: { size?: number }) {
  const { size = 18 } = props
  return (
    <svg width={`${size}`} height={`${size}`} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='7' cy='7' r='6.5' fill='#F3F3F3' stroke='#AAB3BE' />
      <rect x='6.125' y='3.5' width='2' height='4.375' fill='#AAB3BE' />
      <rect x='6.125' y='8.75' width='2' height='1.75' fill='#AAB3BE' />
    </svg>
  )
}
