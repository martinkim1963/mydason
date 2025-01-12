export function KakaoIcon(props: { size?: number }) {
  const { size = 56 } = props
  return (
    <svg width={`${size}`} height={`${size}`} viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z'
        fill='#FDE500'
      />
      <path
        d='M55.5 28C55.5 43.1878 43.1878 55.5 28 55.5C12.8122 55.5 0.5 43.1878 0.5 28C0.5 12.8122 12.8122 0.5 28 0.5C43.1878 0.5 55.5 12.8122 55.5 28Z'
        stroke='black'
        strokeOpacity='0.05'
      />
      <path
        d='M28.1663 36.5042C27.3916 36.5096 26.6223 36.4744 25.8557 36.366C25.7393 36.3497 25.6472 36.3714 25.5497 36.4419C24.0274 37.5097 22.5078 38.5802 20.9367 39.5775C20.7471 39.6995 20.5467 39.8052 20.349 39.919C20.2785 39.9596 20.2054 39.984 20.1241 39.9949C19.8722 40.0301 19.726 39.881 19.7801 39.6317C19.8722 39.1927 20.0049 38.7645 20.1268 38.3335C20.4356 37.2468 20.7471 36.16 21.0586 35.0732C21.0857 34.9784 21.0776 34.9323 20.9774 34.8835C19.4957 34.1328 18.1874 33.1544 17.1229 31.8725C16.0692 30.6042 15.3568 29.1732 15.1022 27.5363C14.8124 25.6635 15.1428 23.8938 16.0448 22.2325C16.9279 20.6064 18.2037 19.3461 19.7422 18.3434C21.3864 17.2756 23.1904 16.6089 25.1109 16.262C26.5438 15.9991 27.9875 15.9341 29.4367 16.0669C32.1643 16.3135 34.6807 17.1563 36.8991 18.7933C38.3727 19.8801 39.5564 21.2189 40.2769 22.9181C41.4308 25.6364 41.1897 28.268 39.6539 30.7749C38.6706 32.382 37.2892 33.5881 35.6694 34.5258C34.1227 35.4228 32.4569 35.9893 30.6935 36.2847C29.8565 36.4256 29.0114 36.4988 28.1609 36.5042H28.1663Z'
        fill='#3A1D05'
      />
    </svg>
  )
}
