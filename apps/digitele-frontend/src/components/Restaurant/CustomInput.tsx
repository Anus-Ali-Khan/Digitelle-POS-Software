import { twMerge } from "tailwind-merge";

type PropsType = {
  placeholder: string;
  type: string;
  icon?: React.ReactNode;
  borderRadius?: "sm" | "md" | "lg" | string;
  width?: string;
  fontSize?: string;
  padding?: string;
  paddingHorizontal?: string;
  paddingVertical?: string;
  className?: string;
};

const CustomInput = ({
  placeholder,
  type,
  icon,
  borderRadius,
  width,
  fontSize,
  padding,
  paddingHorizontal,
  paddingVertical,
  className,
}: PropsType) => {
  return (
    <div
      className={twMerge(
        `flex items-center py-3 gap-2 px-4 rounded-full border-2 w-full border-[#e3d0d0] max-[769px]:px-2 max-[769px]:py-2 max-[321px]:w-[80%] rounded-${borderRadius} `,
        width,
        padding,
        paddingHorizontal,
        paddingVertical,
        className
      )}
    >
      {icon ? icon : null}
      <input
        placeholder={placeholder}
        type={type}
        className={twMerge(
          `placeholder:text-[#AEADAD] w-full placeholder:text-[14px] placeholder:leading-[21px] placeholder:font-poppins outline-none`,
          fontSize
        )}
      />
    </div>
  );
};

export default CustomInput;
