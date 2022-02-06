import React from "react";
import Meta from "../../_shared/Meta";

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
