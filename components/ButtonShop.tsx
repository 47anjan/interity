import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const ButtonShop = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "py-[14px] hover:bg-black transition-all duration-500 px-6 bg-olive text-white font-medium rounded-lg",
        className
      )}
    >
      {children}
    </button>
  );
};
export default ButtonShop;
