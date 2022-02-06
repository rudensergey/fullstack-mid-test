// absoule
import React from "react";

// components
import { Description } from "./Character.helpers";

// types
import { ICharacter } from "@types";

// style
import { Wrapper, Image, TextBlock, Button } from "./Character.styled";

const Character: React.FC<ICharacter> = ({ name, species, gender, avatar }) => {
  return (
    <Wrapper>
      <Image src={avatar} />
      <TextBlock>
        <Description description="Name" content={name} />
        <Description description="Gender" content={gender} />
        <Description description="Species" content={species} />
      </TextBlock>
      <Button>View Profile</Button>
    </Wrapper>
  );
};

export default Character;
