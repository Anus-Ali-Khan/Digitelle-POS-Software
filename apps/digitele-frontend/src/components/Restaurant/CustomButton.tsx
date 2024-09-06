import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PropsType = {
  title: string;
  bgColor?: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: () => void;
  icon?: ReactNode;
  borderRadius?: "sm" | "md" | "lg" | "full" | string;
  paddingHorizontal?: string;
  paddingVertical?: string;
  className?: string;
  textColor?: string;
  textSize?: string;
};

const CustomButton = ({
  title,
  bgColor,
  fontSize,
  fontWeight,
  borderRadius = "md",
  paddingHorizontal,
  paddingVertical,
  className,
  onClick,
  icon,
  textColor,
  textSize,
}: PropsType) => {
  return (
    <div
      className={twMerge(
        `flex items-center cursor-pointer justify-center gap-5 bg-Secondary border border-[#e3d0d0]  text-[14px] font-[700] ${fontWeight} ${fontSize} rounded-${borderRadius} ${paddingHorizontal} ${paddingVertical} ${className} `,
        bgColor
      )}
      onClick={onClick}
    >
      <button
        className={twMerge(`font-poppins text-white`, textColor, textSize)}
        
      >
        {title}
      </button>
      {icon ? icon : null}
    </div>
  );
};

export default CustomButton;
