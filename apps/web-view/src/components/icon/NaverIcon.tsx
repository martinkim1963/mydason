export function NaverIcon(props: { size?: number }) {
  const { size = 56 } = props
  return (
    <svg width={`${size}`} height={`${size}`} viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z'
        fill='#03C75B'
      />
      <path
        d='M55.5 28C55.5 43.1878 43.1878 55.5 28 55.5C12.8122 55.5 0.5 43.1878 0.5 28C0.5 12.8122 12.8122 0.5 28 0.5C43.1878 0.5 55.5 12.8122 55.5 28Z'
        stroke='black'
        strokeOpacity='0.05'
      />
      <g filter='url(#filter0_d_385_286)'>
        <path d='M38 18V38H30.9545L24.0455 27.9312V38H17V18H24.0455L30.9545 28.4736V18H38Z' fill='white' />
      </g>
      <defs>
        <filter
          id='filter0_d_385_286'
          x='16'
          y='17'
          width='23'
          height='22'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='0.5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_385_286' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_385_286' result='shape' />
        </filter>
      </defs>
    </svg>
  )
}
