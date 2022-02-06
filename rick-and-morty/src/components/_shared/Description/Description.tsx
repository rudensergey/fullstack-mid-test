// absoule
import React from "react";

// components

// types

// style
import { Text, Span } from "./Description.styled";

interface IDescriptionProps {
  description: string;
  content: string | number;
}

const Description: React.FC<IDescriptionProps> = ({ description, content }) => {
  return (
    <Text>
      <Span>{description}</Span>
      {": " + content}
    </Text>
  );
};

export default Description;
