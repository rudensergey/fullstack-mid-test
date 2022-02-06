// absoule
import React from "react";

// components

// types

// style
import { Button } from "./Button.styled";

interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick: (event: React.SyntheticEvent) => void;
}

const ButtonComponent: React.FC<IButtonProps> = ({ children, className, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ButtonComponent;
