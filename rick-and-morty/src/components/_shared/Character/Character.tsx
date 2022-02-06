// absoule
import React from "react";
import Link from "next/link";

// components
import Description from "@shared/Description";
import Button from "@shared/Button";

// types

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
      <Link href={"/character/[slug]"} as={`/character/${id}`}>
        <Button>View Profile</Button>
      </Link>
    </Wrapper>
  );
};

export default Character;
