export const getEpisodeData = (episodes: LickApi.IEpisode[]): (string | number)[][] => {
  const n = episodes.length;

  const firstEpisodeData = n
    ? [
        ["First appearance", `${episodes[0].name}:${episodes[0].episode}`],
        ["First appearance air date", episodes[0].air_date],
        ["First appearance character count", episodes[0].characters.length],
      ]
    : null;

  n > 1 &&
    firstEpisodeData.push(
      ["Last appearance", `${episodes[n - 1].name}:${episodes[n - 1].episode}`],
      ["Last appearance air date", episodes[n - 1].air_date],
      ["Last appearance character count", episodes[n - 1].characters.length]
    );

  return firstEpisodeData;
};

export const getLocationData = (location: LickApi.ILocation): (string | number)[][] => {
  const locationData = [
    ["Name", location.name],
    ["Type", location.type],
    ["Dimension", location.dimension],
    ["No. of Residents", location.residents.length],
  ];

  return locationData;
};
