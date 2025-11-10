export const getDataByQueryParams = (data, queryObj) => {
  const { continent, country, is_open_to_public } = queryObj;

  // Check if query object is empty
  if (Object.keys(queryObj).length === 0) {
    return data;
  }

  return data.filter((destination) => {
    const matchesContinent =
      !continent ||
      destination.continent.toLowerCase() === continent.toLowerCase();

    const matchesCountry =
      !country || destination.country.toLowerCase() === country.toLowerCase();

    // Make sure the query string value is converted to a bool
    const matchesIsOpenToPublic =
      !is_open_to_public ||
      destination.is_open_to_public ===
        (is_open_to_public.toLowerCase() === "true");

    return matchesContinent && matchesCountry && matchesIsOpenToPublic;
  });
};
