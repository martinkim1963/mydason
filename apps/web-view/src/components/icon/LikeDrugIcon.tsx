export function LikeDrugIcon(props: { isLike?: boolean }) {
  if (props.isLike) {
    return (
      <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='25' height='25' rx='12.5' fill='#EF727A' />
        <path
          d='M12.4513 8.87073C13.844 7.60022 15.9961 7.03292 17.3375 8.39913C18.679 9.76534 18.7251 11.9419 17.4775 13.3616L12.4507 18.4785L7.42396 13.3616C6.17636 11.9419 6.22299 9.7619 7.56387 8.39913C8.90626 7.03482 11.0546 7.59834 12.4513 8.87073Z'
          fill='white'
        />
      </svg>
    )
  }
  return (
    <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='25' height='25' rx='12.5' fill='#D3D3D3' />
      <path
        d='M12.4511 8.87073C13.8437 7.60022 15.9959 7.03292 17.3373 8.39913C18.6788 9.76534 18.7249 11.9419 17.4772 13.3616L12.4504 18.4785L7.42371 13.3616C6.17611 11.9419 6.22275 9.7619 7.56362 8.39913C8.90601 7.03482 11.0544 7.59834 12.4511 8.87073Z'
        fill='white'
      />
    </svg>
  )
}
