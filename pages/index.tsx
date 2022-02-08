// absolute
import { NextPage } from "next";

// components
import Main from "@templates/Main";

// utils
import { getCharacters } from "@api";

interface IHomeProps {
  data: LickApi.ICharacterCore[];
}

const Home: NextPage<IHomeProps> = ({ data }) => {
  return <Main title="Rick and Morty: Main" characters={data} />;
};

export async function getServerSideProps() {
  const response = await getCharacters({
    name: "Rick",
    status: "Alive",
  }).catch((err) => console.error(err));
  return { props: { data: response ? response?.data?.characters?.results : [] } };
}

export default Home;
