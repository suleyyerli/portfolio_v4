import { ComponentPropsWithoutRef } from "react";

export const NextIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size || 256}
      height={props.size || 256}
      viewBox="0 0 256 256"
      {...props}
    >
      <title>Next.js</title>
      <g>
        <circle fill="#3B82F6" cx="128" cy="128" r="128"></circle>
        <path
          d="M212.6336,224.028444 L98.3352889,76.8 L76.8,76.8 L76.8,179.157333 L94.0282311,179.157333 L94.0282311,98.6788978 L199.109689,234.446222 C203.851378,231.273244 208.368356,227.790222 212.6336,224.028444 Z"
          fill="#FFFFFF"
        ></path>
      </g>
    </svg>
  );
};
