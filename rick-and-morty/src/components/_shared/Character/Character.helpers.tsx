// absoule
import React from "react";

// components

// types

// style
import { Span, Text } from "./Character.styled";

interface IDescriptionProps {
  description: string;
  content: string;
}

export const Description: React.FC<IDescriptionProps> = ({ description, content }) => {
  return (
    <Text>
      <Span>{description}</Span>
      {": " + content}
    </Text>
  );
};
