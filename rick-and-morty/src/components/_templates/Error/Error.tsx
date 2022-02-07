// absoule
import React from "react";
import Image from "next/image";

// components

// style
import { ImageWrapper, Wrapper, Title } from "./Error.styled";

interface IErrorProps {
  error: number;
}

const Error: React.FC<IErrorProps> = ({ error }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image objectFit="cover" src={"/error.jpg"} alt={"wall with Rick"} layout="fill" />;
      </ImageWrapper>
      <Title>{`${error} - here we go again`}</Title>
    </Wrapper>
  );
};

export default Error;
