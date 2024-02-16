import React from "react";
import RightIcon from "../Icons/RightIcon";
import Text from "./Text";

interface TextTagProps {
  children: string;
  className?: string;
}

const TextTag: React.FC<TextTagProps> = ({ children, className }) => {
  return (
    <span
      className={`bg-slate-300 my-1 px-2 rounded-lg inline-flex items-center space-x-2 max-h-8 ${className}`}
    >
      <RightIcon />
      <span>{children}</span>
    </span>
  );
};

export default TextTag;
