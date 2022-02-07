// absoule
import React from "react";

// components
import Meta from "@shared/Meta";
import Character from "@shared/Character";

// style
import { Wrapper, Title } from "./Main.styled";

interface IMainTemplateProps {
  data: { data: LickApi.ICharacterCore[] };
  className?: string;
  title: string;
}

const MainTemplate: React.FC<IMainTemplateProps> = ({ title, data: { data } }) => {
  return (
    <Wrapper>
      <Meta title={title} />
      <Title>Rick and Morty</Title>
      {data.map((char) => (
        <Character key={char.id} {...char} />
      ))}
    </Wrapper>
  );
};

export default MainTemplate;
