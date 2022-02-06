import React from "react";
import Meta from "@shared/Meta";
import Character from "@shared/Character";
import { ICharacter } from "@types";
import { Wrapper } from "./Main.styled";

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
        {data.map((char) => (
          <Character key={char.id} {...char}></Character>
        ))}
      </Wrapper>
    </>
  );
};

export default MainTemplate;
