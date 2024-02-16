import React, { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: any;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = "default",
  className,
}) => {
  const variantClasses: { [key: string]: string } = {
    default: "text-gray-800",
    primary: "text-blue-600",
    secondary: "text-gray-600",
  };

  const variantClass = variantClasses[variant] || variantClasses["default"];

  return <p className={` p-1 ${variantClass} ${className}`}>{children}</p>;
};

export default Text;
