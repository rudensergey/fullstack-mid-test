// absoule
import React from "react";
import Image from "next/image";

// style
import { ImageWrapper } from "./Background.styled";

interface IBackgroundProps {
  children?: React.ReactNode;
}

const Background: React.FC<IBackgroundProps> = ({ children }) => {
  return (
    <ImageWrapper>
      <Image objectFit="cover" src={"/wall.png"} alt={"wall with Rick"} layout="fill" />
      {children}
    </ImageWrapper>
  );
};

export default Background;
