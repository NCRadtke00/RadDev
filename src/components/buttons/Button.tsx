import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "primary" | "secondary" | "outlined" | "red";
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  variant,
  className,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={`py-3 px-6 text-white border-none rounded-lg
       font-bold transition-all duration-200 transform flex
       items-center justify-center focus:outline-none
       active:scale-95
    ${disabled && "opacity-50 hover:scale-100 "}
    ${className} ${
        variant == "primary"
          ? "bg-[#f07] hover:scale-105"
          : variant == "secondary"
          ? "bg-[#4e0b4b]"
          : variant == "outlined"
          ? "bg-none text-slate-400 font-medium !border-2 !border-solid !border-slate-300"
          : variant === "red"
          ? "bg-[#d01] text-white border-none h-6 rounded-md ml-2"
          : "none"
      }`}
      style={{
        boxShadow:
          variant == "primary"
            ? "0 0.5rem 1rem #ff007725"
            : variant == "secondary"
            ? "0 0.5rem 1rem #4e0b4b25"
            : "0 0.5rem 1rem #4e0b4b10",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
