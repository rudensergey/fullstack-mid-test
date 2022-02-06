// absoule
import React from "react";

// components
import Meta from "@shared/Meta";
import Character from "@shared/Character";

// types
import { ICharacter } from "@types";

// style
import { Wrapper, Title, Wallpaper } from "./Main.styled";

interface IMainTemplateProps {
  data: { data: ICharacter[] };
  className?: string;
  title: string;
}

const MainTemplate: React.FC<IMainTemplateProps> = ({ className, title, data: { data } }) => {
  return (
    <>
      <Meta title={title} />
      <Wrapper>
        <Wallpaper />
        <Title>Rick and Morty</Title>
        {data.map((char) => (
          <Character key={char.id} {...char}></Character>
        ))}
      </Wrapper>
    </>
  );
};

export default MainTemplate;
