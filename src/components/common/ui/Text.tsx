import React from "react";

export const Text = ({
  props,
  className,
  children,
}: {
  props?: React.HTMLAttributes<HTMLParagraphElement>;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p {...props} className={className}>
      {children}
    </p>
  );
};
