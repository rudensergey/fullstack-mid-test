export const getEpisodeData = (episodes: LickApi.IEpisode[]): (string | number)[][] => {
  const n = episodes.length;

  const firstEpisodeData = n
    ? [
        ["First appearance", `${episodes[0].name}:${episodes[0].episode}`],
        ["First appearance air date", episodes[0].airDate],
        ["First appearance character count", episodes[0].noOfCharacters],
      ]
    : null;

  n > 1 &&
    firstEpisodeData.push(
      ["Last appearance", `${episodes[n - 1].name}:${episodes[n - 1].episode}`],
      ["Last appearance", episodes[n - 1].airDate],
      ["Last appearance", episodes[n - 1].noOfCharacters]
    );

  return firstEpisodeData;
};

export const getLocationData = (location: LickApi.ILocation): (string | number)[][] => {
  const locationData = [
    ["Name", location.name],
    ["Type", location.type],
    ["Dimension", location.dimension],
    ["No. of Residents", location.noOfResidents],
  ];

  return locationData;
};
