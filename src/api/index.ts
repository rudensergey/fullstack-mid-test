// absoule
import client from "@apollo";
import { gql } from "@apollo/client";

export function getCharacters(
  filters: Record<string, string>
): Promise<{ data: { characters: { results: LickApi.ICharacterCore[] } } }> {
  return client.query({
    variables: {
      filter: { ...filters },
    },
    query: gql`
      query Query($filter: FilterCharacter) {
        characters(filter: $filter) {
          results {
            status
            name
            location {
              type
              name
              id
              dimension
              created
            }
            origin {
              created
              dimension
              name
              type
              id
            }
            episode {
              name
              episode
              created
              air_date
              id
            }
            id
            image
            species
            gender
          }
        }
      }
    `,
  });
}

export function getCharacterData(characterId: number) {
  return client.query({
    variables: { characterId },
    query: gql`
      query Character($characterId: ID!) {
        character(id: $characterId) {
          id
          name
          status
          species
          gender
          image
          origin {
            id
            name
            type
            dimension
          }
          location {
            type
            id
            name
            dimension
            residents {
              status
              species
              type
              name
              id
              gender
            }
          }
          episode {
            id
            name
            air_date
            episode
            characters {
              id
              name
              status
              species
              gender
            }
          }
        }
      }
    `,
  });
}
