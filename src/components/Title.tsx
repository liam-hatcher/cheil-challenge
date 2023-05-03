interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return <div className="uppercase tracking-wide text-4xl">{children}</div>;
}

export default Title;
