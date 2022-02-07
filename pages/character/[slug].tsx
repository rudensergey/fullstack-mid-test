// absoule
import React from "react";
import { NextPage } from "next";

// components
import Character from "@templates/Character";

// mock
import { data } from "@mock/singleCharacter.json";

interface ICharacterPageProps {
  data: LickApi.ICharacter;
  id: number;
}

interface IGetServerSideProps {
  props: ICharacterPageProps;
}

const CharacterPage: NextPage<ICharacterPageProps> = ({ data }) => {
  return <Character title={`Rick and Morty: ${data.name}`} data={data} />;
};

export async function getServerSideProps({ query }): Promise<IGetServerSideProps> {
  return { props: { data, id: query.slug } };
}

export default CharacterPage;
