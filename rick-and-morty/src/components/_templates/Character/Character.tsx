// absoule
import React from "react";

// components
import Meta from "@shared/Meta";
import Background from "@shared/Background";

// types

// style
import { Wrapper } from "./Character.styled";

interface ICharacterTemplateProps {
  className?: string;
  title: string;
}

const CharacterTemplate: React.FC<ICharacterTemplateProps> = ({ className, title }) => {
  return (
    <Background>
      <Meta title={title} />
      <Wrapper className={className}></Wrapper>
    </Background>
  );
};

export default CharacterTemplate;
