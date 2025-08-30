const URL = "https://dragonball-api.com/api/characters?limit=16";

export const response = async () => {
  try {
    const res = await fetch(URL);
    const json = await res.json();

    return json.items?.map((result) => ({
      id: result.id,
      name: result.name,
      image: result.image,
    }));
  } catch (e) {
    throw new Error("API response error", e.message);
  }
};
