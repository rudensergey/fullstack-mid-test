// absoule
import React from "react";
import Router from "next/router";

// components
import Meta from "@shared/Meta";
import Background from "@shared/Background";
import Description from "@shared/Description";
import Button from "@shared/Button";

// types

// style
import { Title, Wrapper, CharacterCore, Image, CharacterCoreWrapper } from "./Character.styled";

interface ICharacterTemplateProps {
  data: LickApi.ICharacter;
  title: string;
}

const CharacterTemplate: React.FC<ICharacterTemplateProps> = ({ data, title }) => {
  const { name, avatar, origin, status, location, episodes } = data;

  const firstEpisode = episodes.length ? episodes[0] : null;
  const lastEpisode = episodes.length > 1 ? episodes[episodes.length - 1] : null;

  return (
    <Background>
      <Meta title={title} />
      <Wrapper>
        <Title>Rick and Morty</Title>
        <Button onClick={() => Router.push("/")}>{"< Back to charact listing"}</Button>
        <CharacterCore>
          <Image src={avatar}></Image>
          <CharacterCoreWrapper>
            <Description description="Name" content={name} />
            <Description description="Status" content={status} />
            <Description description="Origin" content={origin.name} />
          </CharacterCoreWrapper>
        </CharacterCore>
        <div>
          <Description description="Name" content={location.name} />
          <Description description="Type" content={location.type} />
          <Description description="Dimension" content={location.dimension} />
          <Description description="No. of Residents" content={location.noOfResidents} />
        </div>

        {firstEpisode && (
          <div>
            <Description
              description="First appearance"
              content={`${firstEpisode.name}:${firstEpisode.episode}`}
            />
            <Description description="First appearance air date" content={firstEpisode.airDate} />
            <Description
              description="First appearance character count"
              content={firstEpisode.noOfCharacters}
            />
            {lastEpisode && (
              <>
                <Description
                  description="Last appearance"
                  content={`${lastEpisode.name}:${lastEpisode.episode}`}
                />
                <Description description="Last appearance" content={lastEpisode.airDate} />
                <Description description="Last appearance" content={lastEpisode.noOfCharacters} />
              </>
            )}
          </div>
        )}
      </Wrapper>
    </Background>
  );
};

export default CharacterTemplate;
