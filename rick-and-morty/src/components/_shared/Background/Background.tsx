// absoule
import React from "react";

// style
import { Wrapper } from "./Background.styled";

interface IBackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<IBackgroundProps> = (props) => {
  return <Wrapper {...props} />;
};

export default Background;
