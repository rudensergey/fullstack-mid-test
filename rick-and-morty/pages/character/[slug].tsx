// absoule
import React from "react";
import { NextPage } from "next";

// components
import Character from "@templates/Character";

// types

// style

import { data } from "@mock/singleCharacter.json";

interface ICharacterPageProps {
  data: LickApi.ICharacter;
  id: number;
}

interface IGetServerSideProps {
  props: ICharacterPageProps;
}

const CharacterPage: NextPage<ICharacterPageProps> = ({ data }) => {
  return <Character title="Rick and Morty: Character" data={data} />;
};

export async function getServerSideProps({ query }): Promise<IGetServerSideProps> {
  return { props: { data, id: query.slug } };
}

export default CharacterPage;
