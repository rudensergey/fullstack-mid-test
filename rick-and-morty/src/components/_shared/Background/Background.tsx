// absoule
import React from "react";

// components

// types

// style
import { Wrapper } from "./Background.styled";

interface IBackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<IBackgroundProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Background;
