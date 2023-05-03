import Title from "./Title";

interface SectionProps {
  children: React.ReactNode;
  title: string;
}

function Section({ children, title }: SectionProps) {
  return (
    <div className="my-4">
      <Title>{title}</Title>
      <div className="grid grid-cols-3 gap-4 overflow-scroll">{children}</div>
    </div>
  );
}

export default Section;
