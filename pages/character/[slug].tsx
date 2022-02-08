// absoule
import React from "react";
import { NextPage } from "next";

// components
import Character from "@templates/Character";

// mock
import { getCharacterData } from "@api";

interface ICharacterPageProps {
  character: LickApi.ICharacter;
}

interface IGetServerSideProps {
  props: ICharacterPageProps;
}

const CharacterPage: NextPage<ICharacterPageProps> = ({ character }) => {
  return <Character title={`Rick and Morty: ${character.name}`} character={character} />;
};

export async function getServerSideProps({ query }): Promise<IGetServerSideProps> {
  const response = await getCharacterData(query.slug).catch((error) => console.error(error));
  return { props: { character: response ? response.data.character : [] } };
}

export default CharacterPage;
