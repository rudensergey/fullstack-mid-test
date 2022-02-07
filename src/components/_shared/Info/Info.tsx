// absoule
import React from "react";

// components
import Description from "@shared/Description";

// style
import { Wrapper, Title } from "./Info.styled";

interface IInfoProps {
  description: (string | number)[][];
  title: string;
}

const Info: React.FC<IInfoProps> = ({ description, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {description.map(([description, content], i) => (
        <Description key={i} description={description} content={content}></Description>
      ))}
    </Wrapper>
  );
};

export default Info;
