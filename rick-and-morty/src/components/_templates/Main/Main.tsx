import React from "react";
import Meta from "../../_shared/Meta";

import { Wrapper } from "./Main.styled";

interface IMainTemplateProps {
  className?: string;
  title: string;
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
