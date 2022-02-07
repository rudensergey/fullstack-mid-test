// absoule
import React from "react";
import Image from "next/image";

// components

// style
import { ImageWrapper, Wrapper, Title } from "./Error.styled";

interface IErrorProps {
  children?: React.ReactNode;
}

const Error: React.FC<IErrorProps> = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image objectFit="cover" src={"/404.jpg"} alt={"wall with Rick"} layout="fill" />;
      </ImageWrapper>
      <Title>404 - here we go again</Title>
    </Wrapper>
  );
};

export default Error;
