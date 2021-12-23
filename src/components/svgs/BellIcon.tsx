const BellIcon = () => {
  return (
    <svg
      width={44}
      height={44}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1222_1236)">
        <rect x={4} width={36} height={36} rx={8} fill="#FFE4C2" />
        <path
          d="M21.9998 10C20.4085 10 18.8824 10.6321 17.7571 11.7574C16.6319 12.8826 15.9998 14.4087 15.9998 16V19.586L15.2928 20.293C15.153 20.4329 15.0578 20.611 15.0192 20.805C14.9806 20.9989 15.0004 21.2 15.0761 21.3827C15.1518 21.5654 15.2799 21.7215 15.4443 21.8314C15.6087 21.9413 15.802 22 15.9998 22H27.9998C28.1975 22 28.3908 21.9413 28.5552 21.8314C28.7197 21.7215 28.8478 21.5654 28.9235 21.3827C28.9991 21.2 29.0189 20.9989 28.9804 20.805C28.9418 20.611 28.8466 20.4329 28.7068 20.293L27.9998 19.586V16C27.9998 14.4087 27.3676 12.8826 26.2424 11.7574C25.1172 10.6321 23.5911 10 21.9998 10ZM21.9998 26C21.2041 26 20.4411 25.6839 19.8785 25.1213C19.3159 24.5587 18.9998 23.7956 18.9998 23H24.9998C24.9998 23.7956 24.6837 24.5587 24.1211 25.1213C23.5585 25.6839 22.7954 26 21.9998 26Z"
          fill="#FFAD47"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1222_1236"
          x={0}
          y={0}
          width={44}
          height={44}
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
            result="effect1_dropShadow_1222_1236"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1222_1236"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BellIcon;
