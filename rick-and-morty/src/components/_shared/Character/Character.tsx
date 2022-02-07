// absoule
import React from "react";

// components
import Description from "@shared/Description";
import Button from "@shared/Button";

// style
import { Wrapper, Image, TextBlock } from "./Character.styled";

const Character: React.FC<LickApi.ICharacterCore> = ({ id, name, species, gender, avatar }) => {
  return (
    <Wrapper>
      <Image src={avatar} />
      <TextBlock>
        <Description description="Name" content={name} />
        <Description description="Gender" content={gender} />
        <Description description="Species" content={species} />
      </TextBlock>
      <Button href="/character/[slug]" as={`/character/${id}`}>
        View Profile
      </Button>
    </Wrapper>
  );
};

export default Character;
