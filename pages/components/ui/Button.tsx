import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: String;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  className,
}) => {
  const defaultVariant = "primary";

  const variantClasses: { [key: string]: string } = {
    primary:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-3xl",
    secondary:
      "bg-gray-500 hover:bg-gray-700 text-white font-bold p-2 rounded-lg",
  };

  const variantClass =
    variantClasses[variant] || variantClasses[defaultVariant];

  return (
    <button className={`${variantClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
