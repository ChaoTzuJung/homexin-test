import { IconPropsI } from "./types";
import iconPath from "./lib";

export const Icon = (props: IconPropsI) => {
  const { className, style, color, size, name } = props;
  return (
    <svg
      className={className}
      style={style}
      viewBox={`0 0 ${size} ${size}`}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill={color} d={iconPath[name]} />
    </svg>
  );
};
