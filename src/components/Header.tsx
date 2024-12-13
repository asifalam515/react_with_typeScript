import { Children, FC, ReactNode } from "react";
type HeaderProps = {
  children: ReactNode;
  image: {
    src: string;
    alt: string;
  };
};
const Header = ({ image, children }: HeaderProps) => {
  return (
    <div>
      <img className="w-80 h-80" src={image.src} alt={image.alt} />
      {children}
    </div>
  );
};

export default Header;
