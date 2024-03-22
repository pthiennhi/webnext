import React from "react";

export const Surround = ({
  props,
  className,
  children,
}: {
  props?: React.HTMLAttributes<HTMLParagraphElement>;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};
