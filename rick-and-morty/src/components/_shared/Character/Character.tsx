import React from "react";
import { ICharacter } from "@types";
import { Wrapper, Image, TextBlock, Button } from "./Character.styled";
import { Description } from "./Character.helpers";

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
