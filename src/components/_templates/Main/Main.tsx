// absoule
import React from "react";

// components
import Meta from "@shared/Meta";
import Character from "@shared/Character";
import Background from "@shared/Background";

// style
import { Wrapper, Title } from "./Main.styled";

interface IMainTemplateProps {
  characters: LickApi.ICharacterCore[];
  className?: string;
  title: string;
}

const MainTemplate: React.FC<IMainTemplateProps> = ({ title, characters }) => {
  return (
    <Background>
      <Wrapper>
        <Meta title={title} />
        <Title>Rick and Morty</Title>
        {characters.map((char) => (
          <Character key={char.id} {...char} />
        ))}
      </Wrapper>
    </Background>
  );
};

export default MainTemplate;
