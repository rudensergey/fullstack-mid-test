// absoule
import React from "react";
import Link from "next/link";

// style
import { Button } from "./Button.styled";

interface IButtonProps {
  className?: string;
  children?: React.ReactNode;
  href?: string;
  as?: string;
  onClick?: (event: React.SyntheticEvent) => void;
}

const ButtonComponent: React.FC<IButtonProps> = ({ children, href, as, onClick }) => {
  const button = <Button onClick={onClick}>{children}</Button>;

  return href && as ? (
    <Link href={href} as={as}>
      {button}
    </Link>
  ) : (
    button
  );
};

export default ButtonComponent;
