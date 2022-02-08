// Namespaces are not compilable.
// Do not import this file. Or import external dependencies.
// Use like so - const intro: LickApi.IIntro = {...};

/* eslint-disable */
declare namespace LickApi {
  interface ICharacterCore {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
  }

  interface ICharacter extends ICharacterCore {
    origin: ILocation;
    location: ILocation;
    episode: IEpisode[];
  }

  interface ILocation {
    id: number;
    name: string;
    type: string;
    residents: ICharacterCore[];
    dimension: string;
  }

  interface IEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: ICharacterCore[];
  }
}
