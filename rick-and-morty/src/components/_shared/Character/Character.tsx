// absoule
import React from "react";

// components
import Description from "@shared/Description";
import Button from "@shared/Button";
import Image from "@shared/Image";

// style
import { Wrapper, TextBlock, ImageWrapper } from "./Character.styled";

const Character: React.FC<LickApi.ICharacterCore> = ({ id, name, species, gender, avatar }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={avatar} alt={"pic"} width={170} height={170} />
      </ImageWrapper>
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
