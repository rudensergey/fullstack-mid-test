// absoule
import React from "react";

// components
import Meta from "@shared/Meta";
import Description from "@shared/Description";
import Button from "@shared/Button";
import Info from "@shared/Info";

// helpers
import { getEpisodeData, getLocationData } from "./Character.helpers";

// style
import {
  Title,
  Wrapper,
  CharacterCore,
  Image,
  CharacterCoreWrapper,
  Name,
} from "./Character.styled";

interface ICharacterTemplateProps {
  data: LickApi.ICharacter;
  title: string;
}

const CharacterTemplate: React.FC<ICharacterTemplateProps> = ({ data, title }) => {
  const { name, avatar, origin, status, location, episodes } = data;

  const locationData = getLocationData(location);
  const episodeData = getEpisodeData(episodes);

  return (
    <Wrapper>
      <Meta title={title} />
      <Title>Rick and Morty</Title>
      <Button href={"/"} as={"/"}>
        {"< Back to charact listing"}
      </Button>
      <CharacterCore>
        <Image src={avatar} />
        <CharacterCoreWrapper>
          <Name>{name}</Name>
          <Description description="Status" content={status} />
          <Description description="Origin" content={origin.name} />
        </CharacterCoreWrapper>
      </CharacterCore>
      <Info title={"Location Details"} description={locationData} />
      {episodeData && <Info title={`Episodes: ${episodes.length}`} description={episodeData} />}
    </Wrapper>
  );
};

export default CharacterTemplate;
