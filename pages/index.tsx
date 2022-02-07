import { NextPage } from "next";

import Main from "@templates/Main";
import mock from "@mock/allCharacters.json";

const Home: NextPage = () => {
  return <Main title="Rick and Morty: Main" data={mock} />;
};

export default Home;
