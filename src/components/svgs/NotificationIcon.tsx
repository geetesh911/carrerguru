const NotificationIcon = () => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1222_1263)">
      <path
        d="M19 17H13M19 17H24L22.595 15.595C22.4063 15.4063 22.2567 15.1822 22.1546 14.9357C22.0525 14.6891 22 14.4249 22 14.158V11C22.0002 9.75894 21.6156 8.54834 20.8992 7.53489C20.1829 6.52144 19.17 5.75496 18 5.341V5C18 4.46957 17.7893 3.96086 17.4142 3.58579C17.0391 3.21071 16.5304 3 16 3C15.4696 3 14.9609 3.21071 14.5858 3.58579C14.2107 3.96086 14 4.46957 14 5V5.341C11.67 6.165 10 8.388 10 11V14.159C10 14.697 9.786 15.214 9.405 15.595L8 17H13H19ZM19 17V18C19 18.7956 18.6839 19.5587 18.1213 20.1213C17.5587 20.6839 16.7956 21 16 21C15.2044 21 14.4413 20.6839 13.8787 20.1213C13.3161 19.5587 13 18.7956 13 18V17H19Z"
        stroke="#8B8C8C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={22} cy={8} r={5} fill="#FF0000" />
      <path
        d="M21.8298 10V6.676L21.1398 6.838V6.25L22.1538 5.8H22.6278V10H21.8298Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1222_1263"
        x={0}
        y={0}
        width={32}
        height={32}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1222_1263"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1222_1263"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default NotificationIcon;
