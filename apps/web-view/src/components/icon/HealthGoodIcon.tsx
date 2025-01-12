export function HealthGoodIcon(props: { size?: number }) {
  const { size = 30 } = props
  return (
    <svg width={`${size}`} height={`${size}`} viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14.8459 30C23.008 30 29.6247 23.2843 29.6247 15C29.6247 6.71573 23.008 0 14.8459 0C6.68382 0 0.0671387 6.71573 0.0671387 15C0.0671387 23.2843 6.68382 30 14.8459 30Z'
        fill='#06C575'
      />
      <path
        d='M8.75181 17.2625C8.37132 16.8886 7.76425 17.3029 7.95969 17.8014C9.04929 20.5645 11.7093 22.5147 14.8207 22.5147C17.9322 22.5147 20.504 20.6277 21.6247 17.9383C21.8288 17.4486 21.2165 17.0238 20.8395 17.3942C18.6828 19.5165 14.1013 22.5376 8.75181 17.2625Z'
        fill='white'
      />
      <path
        d='M10.4484 12.3219C10.4484 13.3488 9.96242 14.1809 9.36227 14.1809C8.76212 14.1809 8.27612 13.3488 8.27612 12.3219C8.27612 11.295 8.76212 10.4629 9.36227 10.4629C9.96242 10.4629 10.4484 11.295 10.4484 12.3219Z'
        fill='white'
      />
      <path
        d='M21.3119 12.3219C21.3119 13.3488 20.8259 14.1809 20.2258 14.1809C19.6256 14.1809 19.1396 13.3488 19.1396 12.3219C19.1396 11.295 19.6256 10.4629 20.2258 10.4629C20.8259 10.4629 21.3119 11.295 21.3119 12.3219Z'
        fill='white'
      />
    </svg>
  )
}