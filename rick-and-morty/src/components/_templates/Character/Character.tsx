// absoule
import React from "react";

// components
import Meta from "@shared/Meta";

// types

// style
import { Wrapper } from "./Character.styled";

interface ICharacterTemplateProps {
  className?: string;
  title: string;
}

const CharacterTemplate: React.FC<ICharacterTemplateProps> = ({ className, title }) => {
  return (
    <>
      <Meta title={title} />
      <Wrapper className={className}></Wrapper>
    </>
  );
};

export default CharacterTemplate;
