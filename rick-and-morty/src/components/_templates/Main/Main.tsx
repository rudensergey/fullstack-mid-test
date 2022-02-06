import React from "react";
import Meta from "@shared/Meta";

import { Wrapper } from "./Main.styled";

interface IMainTemplateProps {
  data: { data: ICharacter[] };
  className?: string;
  title: string;
}

interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  avatar: string;
}

const MainTemplate: React.FC<IMainTemplateProps> = ({ className, title }) => {
  return (
    <>
      <Meta title={title} />
      <Wrapper className={className}></Wrapper>
    </>
  );
};

export default MainTemplate;
