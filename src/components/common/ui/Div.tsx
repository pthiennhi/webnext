export const Div = ({
  props,
  className,
  children,
}: {
  props?: React.HTMLAttributes<HTMLParagraphElement>;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};
