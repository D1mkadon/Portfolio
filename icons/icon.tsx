import React from "react";
import { iconDefs } from "./index";

type IconType = keyof typeof iconDefs;
export interface Item {
  title: string;
  icon: IconType;
  description: string;
  title2?: string;
  languages?: string;
};
interface IconProps extends React.SVGProps<SVGSVGElement> {
  type: IconType;
  className?: string;
  color?: string;
  size?: string | number;
}

export const Icon: React.FC<IconProps> = (props) => {
  const { type, className, color, size, ...rest } = props;
  const icon = iconDefs[type];

  if (!icon) {
    return null;
  }

  const style = { color, fontSize: size };

  return (
    <svg
      className={className}
      height={icon.height}
      width={icon.width}
      viewBox={icon.viewBox}
      style={style}
      {...rest}
    >
      {icon.body}
    </svg>
  );
};

export default Icon;