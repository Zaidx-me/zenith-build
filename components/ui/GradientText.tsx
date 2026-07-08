import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
}

export default function GradientText({ children, as: Tag = "span", className = "" }: Props) {
  return (
    <Tag className={`heading-gradient ${className}`}>
      {children}
    </Tag>
  );
}
