interface PinProps {
  title: string;
  content: string;
  className: string;
  onMouseOver: (className: string) => void;
}

function Pin({ title, content, className, onMouseOver }: PinProps) {
  return (
    <div className={className} onMouseOver={() => onMouseOver(className)}>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
}

export default Pin;
