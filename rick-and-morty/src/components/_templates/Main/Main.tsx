// absoule
import React from "react";

// components
import Meta from "@shared/Meta";
import Character from "@shared/Character";
import Background from "@shared/Background";

// types

// style
import { Wrapper, Title } from "./Main.styled";

interface IMainTemplateProps {
  data: { data: LickApi.ICharacterCore[] };
  className?: string;
  title: string;
}

const MainTemplate: React.FC<IMainTemplateProps> = ({ className, title, data: { data } }) => {
  return (
    <Background>
      <Meta title={title} />
      <Wrapper>
        <Title>Rick and Morty</Title>
        {data.map((char) => (
          <Character key={char.id} {...char}></Character>
        ))}
      </Wrapper>
    </Background>
  );
};

export default MainTemplate;
