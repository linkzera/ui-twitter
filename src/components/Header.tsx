import "./Header.css"
import { Sparkle } from "phosphor-react";

interface IHeader {
  title: string;
}

export function Header({ title }: IHeader) {
  return (
    <div className="timeline-header">
      {title}
      <Sparkle />
    </div>
  )
}